import crypto from "crypto";
import { MeiliSearch } from "meilisearch";
import fetch from "isomorphic-fetch";
import yaml from "yaml";

import list_of_lists from "./list_of_lists.json";
import appropedia_list from "./appropedia_list.json";

main().catch((e) => {
    console.error(e);
    process.exit(1);
});

async function main() {
    const meilisearch = new MeiliSearch({
        host: "http://meilisearch:7700",
        /* apiKey: 'masterKey', */
    });
    let manifests: unknown[] = await Promise.all(
        appropedia_list.map(async (url) => {
            const manifestText = await fetch(url).then((r) => r.text());
            let manifest;
            try {
                manifest = yaml.parse(manifestText);
            } catch (e) {
                console.error(e);
                return null;
            }
            manifest.id = createHash(url);
            if (manifest.keywords || manifest["intended-use"]) {
                return manifest;
            }
        })
    );
    manifests = manifests.filter(Boolean);
    await meilisearch.index("projects").addDocuments(manifests);
}

function createHash(str) {
    return crypto.createHash("sha256").update(str).digest("hex");
}

import crypto from "crypto";
import { MeiliSearch } from "meilisearch";
import fetch from "isomorphic-fetch";

import list_of_lists from "./list_of_lists.json";

main().catch((e) => {
    console.error(e);
    process.exit(1);
});

async function main() {
    const meilisearch = new MeiliSearch({
        host: "http://meilisearch:7700",
        /* apiKey: 'masterKey', */
    });
    for (const url of list_of_lists) {
        const manifestUrls = await fetch(url).then((r) => r.json());
        const manifests = await Promise.all(
            manifestUrls.map(async (url) => {
                const manifest = await fetch(url).then((r) => r.json());
                manifest.id = createHash(url);
                return manifest;
            })
        );
        await meilisearch.index("projects").addDocuments(manifests);
    }
}

function createHash(str) {
    return crypto.createHash("sha256").update(str).digest("hex");
}

import create from "../../assets/create.ts";
import Names from "../../assets/names.ts";
import { Handlers } from "$fresh/server.ts";

import { POSITIONS } from "../../assets/config.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    const name: Record<string, string> | undefined = Names.find((x) =>
      (x.email.toLowerCase() === ctx.params.id.toLowerCase()) ||
      (x.phone === ctx.params.id)
    );

    if (!name) return new Response("", { status: 404 });

    const data = [];
    for (const pos of POSITIONS) {
      data.push({
        x: pos.x,
        y: pos.y,
        maxWidth: pos.maxWidth,
        content: name[pos.content as string],
      });
    }

    const cert = create(data);

    return Promise.resolve(new Response(cert));
  },
};

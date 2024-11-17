import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { html, Html } from "@elysiajs/html";

const list = await Bun.file("./src/list.json").json();
type Game = {
  name: string;
  path: string;
  type: string;
  visible: boolean;
  img: string;
};

const app = new Elysia()
  .use(html())
  .use(
    staticPlugin({
      prefix: "/games",
    })
  )
  .get("/list", () => Bun.file("./src/list.json"))
  .get("/", async () => (
    <html lang="en">
      <head>
        <title>Delusions game CDN</title>
        <link rel="stylesheet" href="/games/output.css" />
      </head>
      <body class="w-full min-h-screen flex flex-col items-center justify-center bg-slate-800">
        <h1 class="text-3xl text-white">Delusionz CDN Games</h1>
        <div class="flex flex-wrap w-full justify-center items-center overflow-y-auto">
          {list.map((game: Game) => (
            <div class="m-2 p-2 bg-slate-700 rounded flex w-[20rem] min-h-[10rem] group space-x-2">
              <img
                src={game.img}
                class={
                  "hover:scale-110 transition-all duration-300 ease-in-out rounded-md object-cover h-[10rem] w-[10rem] "
                }
                height={150}
                width={150}
                alt={game.name}
              />
              <div class="flex flex-col items-center justify-center text-white space-y-2 h-full">
                <h2 class="text-xl">{game.name}</h2>
                <h3 class="text-xs p-2 bg-slate-600 rounded-lg">{game.type}</h3>
                <button onclick={`window.location.href = '${game.path}'`}>
                  Play
                </button>
              </div>
            </div>
          ))}
        </div>
      </body>
    </html>
  ))
  .listen(8000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

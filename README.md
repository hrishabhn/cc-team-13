# Cloud Computing - Final Project - Team 13

This is a repository for the final project of the Cloud Computing course.

## Team Members

-   [Hrishabh Nadkarni](https://github.com/hrishabhn)
-   [Lucas Brunengo](https://github.com/LucasBrunengo)
-   [Sophie Bald](https://github.com/sophiecbo)
-   [Victor Jansen](https://github.com/VictorSnorri)
-   [Yu Song](https://github.com/Song-Yu-0128)

## System Architecture

Our system consists of a [**React**](https://react.dev/) front end, a [**Next.js**](https://nextjs.org/) API, and a **SQL** database hosted by [**Neon DB**](https://console.neon.tech/). React and Next.js are both written in [**TypeScript**](https://www.typescriptlang.org/) and this source code is then compiled into a set of lambda functions and deployed using [**Vercel**](https://vercel.com/).

Once compiled, the system consists of a main API as well as a series of lambda functions. These all interact with eachother using either `GET` or `POST` HTTP requests.

### Lambda Functions

| Function Name  | Description                                   | Path                                         |
| -------------- | --------------------------------------------- | -------------------------------------------- |
| Form Lambda    | Handles form submissions from the customer    | [`app/new/action.ts`](src/app/new/action.ts) |
| DB Lambda      | Handles database interactions                 | [`model/client.ts`](src/model/client.ts)     |
| ChatGPT Lambda | Handles interactions with OpenAI API (GPT-4o) | [`model/openai.ts`](src/model/openai.ts)     |

### Webpages

-   To access our webpage, visit [this link](https://ticket-tag.vercel.app).
-   The [`/new`](https://ticket-tag.vercel.app/new) page is where you can submit a ticket.
-   The [`/manage`](https://ticket-tag.vercel.app/manage) page is for agents to view and manage tickets. Use password `lambda` to access this.

### SDKs

-   [Neon Serverless SDK](https://github.com/neondatabase/serverless)
-   [OpenAI SDK](https://github.com/openai/openai-node)

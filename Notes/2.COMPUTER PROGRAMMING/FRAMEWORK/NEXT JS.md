### what

- next js : The React framework
- Full stack capabilities
- A framework that solve probleam that acuure in react

### Why

- Server side rendring
- SEO
- Improve routing
- File bsed routing

### Latest update

- [read first](https://nextjs.org/docs)

### setup

- install node
- cmd : `npx create-next-app "name"`
- choice defalut option
- cmd : `npm run dev && npm run start` for start server

### File structure

- In app director is use for routing
- page.tsx <- forntend
- route.js <- api  
    ![[nextjs1.png]]

### Important point
- syntax same as react
- in next js defalut componet is server side rendring means first page build in server then render
- if we want to use a page as clint side rending then top of the page include  
    `'use client'`
- when use sever side component vs client side component [read](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
- For navigation without load , we using Link component

### data Fetching
- 3 Ways
1.  Server Side Rendering (SSR)
2.  Static Side Generation (SSG)
3.  Incremental Static Genration (ISG)

### Sever side rendring
- server side component can't 
   - Listen to browser evnets
   - Access Browser API
   - Mainten state
   - use effects
- so when need then use client side component 


### file based routing


[web devlopment](WEB_DEVLOPMENT)
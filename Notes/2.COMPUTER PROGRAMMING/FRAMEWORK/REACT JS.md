
### what

### why





**State Management**
**Lists and Keys**
**Conditional Rendering**
**Handling Events**

### setup
- create react app : `npx create-react-app "name"`
-  run react app :   `cd name ` => `npm start`

### file structure
![[Drawing 2023-09-27 15.03.32.excalidraw]]

### jsx
- jsx stand for javascript XML 
- jsx = javascript + html 
```jsx
const name = "ahsan"
const element = <h1>my name is {name } , sum = {sum(1,3)} </h1> 
```


###  component
- component is a function 
- rules of componet
   - 1. component must return jsx
   - 2. component name must start with uppercase letter
```jsx

function Hello ()
{
const data = "hello world";
return (
<h1> {data}</h1>
)

}

export default Hello;
```


### props
- props are like parameters to a function 
```jsx
functio Hello (props)
{
  return (
    <h1> hello {props.name} </h1>
  )

}
//call <Hello name = "ahsan"/>
```
- props types

### lifecycle of a component
![[react1.png]]

![[Pasted image 20230928105443.png]]

### hooks
- in react hook name always start with `use`


### useState hook
- A state of a componet is a variable that holds some information that may change over the lifetime of the component
- wheneverteh value of the state changes , the component re-renders itself with updated values.
```jsx
//const [var,changevarfunction] = useState(intial_value)
const [count,setCount] = useState(1);

```


### useEffect hook
- run code during the change in lifecycle of a component
- use for run function for specific movement , mounting , udating , unmounting time of a component
```jsx

1. run when  mount 
-  useEffect(() => {
    console.log("in useEffect");
  }, [])
 
2. run when  mount or update particlar var
-  useEffect(() => {
    console.log("in useEffect");
  }, [var])

3. run when  mount or update var and  un-mount(run return fun also)
-  useEffect(() => {
    console.log("in useEffect");
       return function()
       {
       }
  }, [var])

```

### some another hook
- useContext
- useRef
- useReducer
- useCallback
- useMemo
- useLocation
- custom hooks

### react context api
- alternative of  React Context api -->   redux or **Zustand**  or Jotai or Recoil

### redux and redux toolkit, redux thung
### react router dom


### react query
- react query standardize the way to make call api in react
- provides features 
   - client side cashing
   - error handling
   - refetching the data
   


library called **React Query**.
**Testing React applications**
**Vite**


[web devlopment](WEB_DEVLOPMENT)

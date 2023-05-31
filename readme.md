# React.js
- JS Library for INteractive UI
- Purely based on 'Components'
    - Component, is a autonomous object that has following
        - UI, for End-User Interatcion
        - Data, properties for which data is to be accessed from End-User as well as data presented to end-user
        - Behavior, Events and Logic methods those are responsible to act upon data entered as well as events (e.g. Click, Change) requested by end-user  
    - Components are 
        - reusable
        - Foundational object of react
# App Development using React.js
- The React Command Line Interface (CLI)
    - create-react-app
        - Install it in Machine Scope
            - npm install --global create-react-app
            - npx create-react-app             
        - CReate React App
            - create-react-app [APP-NAME]
- React Object Model
    - react
        - The basic React Library
        - The Component Class
            - Component<P,S> class
                - BAse class for all Components
                - The 'P' is 'propsType', used to pass data across components those are having Parent/Child Relationship
                    - USed to pass data from Parent to Child
                    - Used to pass data from Child to Parent
                - The 'S' is a local state, means  data defined for the component
                    - The state will always be used within the component like a local variable
            - PureComponent, a type of Component that improve the performance**        
    - react-dom
        - A library that ised for following
            - Mount (load and render) the UI of the component in Browser
    - The 'JSX' parser written for React
        - JavaScript XML Extensions
        - An optimized Parser for React Application
        - A Custom HTML where standard HTML tags are 'compiled' into 'JSOM'
-  Types of Component (Practically)
    - Class Component (Upto React 16.8)
        - Derived from  'Component' class
        - Define the state using the 'state' property
        - Pass data across components using 'props' property
        - This uses 'Lifecycle' methods to manage the execution of the component
        - The 'render()' method to render UI on Browser (MOUNT)                               

    - Functional Components (React 16.8+)
        - A JavaScript FUnction that returns the HTML UI
        - React Hooks
            - Standard React Functions used for following
                - State Definition and state update 
                    - useState()
                        - Define an update local state of the component
                        - For each update the Component's UI is changed
                - Asynchronous Operations
                    - useEffect()
                        - AJAX Calls
                        - Component's Lifecycle
                - Data Sharing Across Components
                    - useContext()
                        - Important to pass data from a parent to a specific component only 
                - State Updates in Multiple Stages
                    - useReducer()
                        - Instead of directly updating state like 'useState()', the state is updated in stages e.g. Init, Progress, Complete, Failed, etc.
                - Performance
                    - useMemo()
                        - USed if a function is taking time to execute, so each time wating for execution to complete, cache the previous result if if the new result does not change, then do not update the component
                - Update the Child Only Once irrespective of multiple times parent updates      
                    - useCallback()
                        - Avoiding the frequent child updates for each state change in parent

# React app
- package.json
    - File that contains list of all development dependencies (devDependencies) as well as Producttion / Deployment / Runtime dependencies (dependencies)
    - Also contains command to Built/test/run the applciation   
- src folder 
    - contains all code files
- public folder
    - contains 'index.html' this is the file that is loaded in browser and contains react application in it

- Types of Components
    - Stateless Component
        - Component with HTML UI only
        - No data and events
    - Statefull Component   
        - Component that uses Data (State) to manage HTML Rendering
        - We can implement the statefull component using following
            - The 'props'
                - We can create properties dynamically for React Components using JSX 
            - The 'state'
                - Useing the 'useState()' hook   

- useState(initialValue, Dispatch&lt;SetState&gt;)
````javascript                                             
    function MyComponent(){
        const [x,setX] = useState(0);

        return(
            <input type="text" value={x} onChange={(evt)=>setX(parseInt(evt.target.value))}/> 
        );
    }
   
````

    - The 'x' is a local state property of the component
        - In above component we have following specifications
            - x is bpound to 'value' property of input element
            - when the input element fires 'onChange' event, the value entered in input element will be passed to 'setX()' function that will update the 'x' state property    
                - onChange is an event of input text element
                - evt is event parameter
    - The 'setX' is a callback function that will be used to update the value of 'x' based on an event that is dispatched from UI 
    
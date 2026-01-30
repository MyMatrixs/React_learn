import React, {useState} from "react";

// export default function MyLearnlass(props) {
//     const [count, setCount] = useState(0);
//     return(
//         <div>
//             <p>Learn React</p>
//             <p>Count: {count}</p>
//             <button onClick={(event) => {
//                 console.log(event);
//                 event.preventDefault();
//                 setCount(count + 1);
//                 console.log(props)
//             }}>Increment</button>
//             {props.children}
//         </div>
//     )
// }


export default class MyLearnClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <p>Learn React</p>
                <p>Count: {this.state.count}</p>
                <button onClick={(event) => {
                    console.log(event);
                    event.preventDefault();
                    this.setState({ count: this.state.count + 1 });
                }}>Increment</button>
                {this.props.children}
                {this.props.children}
            </div>
        );
    }
}
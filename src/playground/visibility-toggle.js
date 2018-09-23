
const appRoot = document.getElementById('root');

class VisibilityApp extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            visibility:false
        }
    }
     toggle() {
         this.setState((prevState) => {
                return { visibility:!prevState.visibility }
         })
        }
    render() {
        return  (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.toggle}>{this.state.visibility ? "hide details": "show details"}</button>
            {this.state.visibility ? "" : <p>"some text"</p>} 
            </div>
        );
    
    }
}

ReactDOM.render(<VisibilityApp />, appRoot);
// let Visibility = false;

// const toggle = () => {
//     Visibility = !Visibility;
// render();
// }

// const render = () => {
//   const template = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggle}>{Visibility ? "hide details": "show details"}</button>
//         {Visibility ? "" : <p>"some text"</p>} 
//         </div>
//     );
//     ReactDOM.render(template, appRoot); 
     
// }

// render();
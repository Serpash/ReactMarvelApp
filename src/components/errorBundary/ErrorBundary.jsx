import {Component} from "react";
class ErrorBundary extends Component{
        state = {
            error: false
        }
        componentDidCatch(error, errorInfo) {
            this.setState({
                error:true
            })
        }
        render() {
            if(this.state.error){
                return <h2>Suchka</h2>
            }
            return this.props.children;
        }
}
export default ErrorBundary;
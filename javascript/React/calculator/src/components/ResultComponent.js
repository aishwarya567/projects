import react, {Component} from 'react';

class ReactComponent extends react.Component {
        render(){
            let {result} = this.props;
            return(
                <div className = "result">
                <p>{result}</p>
                </div>
            );
        }

}
export default ReactComponent;
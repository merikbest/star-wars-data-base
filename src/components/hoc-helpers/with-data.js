import React, {Component} from "react";
import Spinner from "../spiner/spinner";

//ЛОГИКА
// HOC. В JS функция может возврашать другую функцию:
// (вынесли всю логику работы с сетью и какой компонент нужно отображать в отдельную функцию)
// View === ItemList
const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: null
        };

        componentDidMount() {
            getData()
                .then((data) => {
                    this.setState({
                        data
                    });
                });
        }

        render() {
            const {data} = this.state;

            if (!data) {
                return <Spinner/>;
            }

            return <View {...this.props} data={data}/>
        }
    };
};

export default withData;
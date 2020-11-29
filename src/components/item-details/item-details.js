import React, {Component} from 'react';

import './item-details.css';
import ErrorButton from "../error-button/error-button";

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {
    state = {
        item: null,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData, getImageUrl} = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                });
            });
    }

    render() {
        const {item, image} = this.state;
        if (!item) {
            return <span>Select a person from a list</span>;
        }

        const {name} = item;

        return (
            <div className="person-details card">
                <img className="person-image"
                     src={image}
                     alt="img"/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            // Копирование (создание елемента с новым свойством)
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item}); // второй аргумент добавить еще свойств
                            })
                        }
                    </ul>
                    <ErrorButton/>
                </div>
            </div>
        );
    }
}
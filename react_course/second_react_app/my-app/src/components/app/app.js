import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form'

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    label: "Going to learn react",
                    important: true,
                    like: false,
                    id: 1
                },
                {
                    label: "That is good",
                    important: false,
                    like: false,
                    id: 2
                },
                {
                    label: "I need a break...",
                    important: false,
                    like: false,
                    id: 3
                },
            ],
            term: '',
            filter: 'all'
        };
        this.maxId = 4;
        this.deleteItem = (id) => {
            this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id);

                const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

                return {
                    data: newArr
                }
            })
        };
        this.addItem = (body) => {
            const newItem = {
                label: body,
                important: false,
                id: this.maxId++
            };
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            })
        };

        this.onToggle = (id, value1) => {
            this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id);
                const old = data[index];
                let newItem;
                if (value1 === 'like') {

                    newItem = {...old, like: !old.like};
                } else {
                    newItem = {...old, important: !old.important};
                }

                const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

                return {
                    data: newArr
                }
            })
        };

        this.searchPost = (items, term) => {
            if (term.length === 0) {
                return items;
            } else {
                return items.filter((item) => {
                    return item.label.indexOf(term) > -1
                })
            }
        };
        this.onUpdateSearch = (term) => {
            this.setState({term});
        };

        this.filterPost = (items, filter) => {
            if (filter === 'like') {
                return items.filter((item) => item.like);
            } else {
                return items;
            }
        };
        this.onFilterSelect = (filter) => {
            this.setState({filter})
        }
    }

    render() {

        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggle={this.onToggle}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </div>
        );
    }
};

import * as React from 'react'
import { Card, Icon, List, Avatar, Button, Skeleton, Checkbox } from 'antd'

import { genreatorArr } from '../../utils/common'
import './index.scss'

/**
 * 在props和state中使用泛型会使得两者只读
 */

export default class TodoList extends React.Component {
    state = {
        initLoading: true,
        loading: false,
        list: []
    }

    count = 3

    onLoadMore = () => {
        this.setState({
          loading: true,
          list: [...this.state.list, ...genreatorArr({ loading: true, tit: '123', desc: 'ddddd', isDone: false },this.count)],
        }, ()=> {
            setTimeout(()=> {
                this.state.list.splice(-this.count, this.count);
                this.setState({
                    loading: false,
                    list: [
                        ...this.state.list,
                        {tit: '123', desc: 'ddddd', isDone: false},
                        {tit: '123', desc: 'ddddd', isDone: false},
                        {tit: '123', desc: 'ddddd', isDone: false}
                    ],
                  })
            }, 1000);
        });
        
      }

    onItemChange = (value:any, index: number, e:any) => {
        console.log(value,index,e);
        this.state.list[index] = Object.assign(this.state.list[index], {isDone: e.target.checked ? true : false});
        this.setState({
            list: [...this.state.list]
        })
    }

    componentDidMount() {
        this.setState({
            initLoading: false,
            data: [],
            list: []
        });
    }

    render() {
        const { initLoading, loading, list } = this.state;

        const loadMore = !initLoading && !loading ? (
            <div style={{
              textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px',
            }}
            >
              <Button onClick={this.onLoadMore}>加载更多</Button>
            </div>
          ) : null;
        return (
            <div>
                <Card
                    title="待办清单"
                    extra={<Icon type="plus" />}
                    style={{ width: 450, display: 'inline-block' }}
                    >
                    <List
                        className="todo-list"
                        loading={initLoading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={list}
                        renderItem={(item:any, i:number) => (
                        <List.Item actions={[<Checkbox onChange={this.onItemChange.bind(this, item, i)} key={i}></Checkbox>]} key={i}>
                            <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={<Avatar icon="smile" />}
                                title={<a href="">{item.tit}</a>}
                                description={item.desc}
                            />
                            <div>{item.isDone ? <span><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />已完成</span> : ''}</div>
                            </Skeleton>
                        </List.Item>
                        )}
                    />
                </Card>
            </div>
        )
    }
}
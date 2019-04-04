import React, { Component } from 'react';
import { Button, Calendar, Tabs } from 'antd';
import TodoList from '../../components/todo';
import './index.scss';

const TabPane = Tabs.TabPane;

interface Props {
    total: number;
    add?: () => void;
    onDateSelect?: () => void;
    onPanelChange?: () => void;
}

class View extends Component<Props> {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const {onDateSelect, onPanelChange} = this.props;
    return (
        <div className="home-wrap">
          <div className="card-container">
            <Tabs type="card" onChange={onPanelChange}>
              <TabPane tab="日程" key="1">
                <div style={{ width: 400, borderRadius: 4 }}>
                  <Calendar 
                    fullscreen={false}
                    onSelect={onDateSelect} />
                </div>
              </TabPane>
              <TabPane tab="我的待办" key="2">
                <TodoList />
              </TabPane>
              <TabPane tab="已完成" key="3">
                
              </TabPane>
            </Tabs>
          </div>
          
        </div>
    );
  }
}

export default View;

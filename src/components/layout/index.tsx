import * as React from 'react';
import { Layout, Menu, Icon, Avatar, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import './index.scss'

const {
    Header, Sider, Content,
  } = Layout;

const SubMenu = Menu.SubMenu;


export default class LayoutContainer extends React.Component {
    state = {
        collapsed: false,
    }

    onCollapse = (collapsed:boolean) => {
        console.log(collapsed);
        this.setState({ collapsed });
      }

    render() {
        return (
            <div className="layout-container">
                <Layout>
                    <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    style={{
                        overflow: 'auto', height: '100vh'
                    }}
                    trigger={<Icon type="menu-fold" />}
                    >
                        <div className="logo" title="程序研究院">{!this.state.collapsed ? 'Coding Search' : <Icon type="html5" />}</div>
                        <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
                            <Menu.Item key="0">
                                <Icon type="file" />
                                <span><Link to="/" className="nav-link">轻OA</Link></span>
                            </Menu.Item>

                            <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>CSS探秘</span></span>}
                            >
                                <Menu.Item key="1">精选博文</Menu.Item>
                                <Menu.Item key="2">特效实例</Menu.Item>
                            </SubMenu>

                            <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>深入JS</span></span>}
                            >
                                <Menu.Item key="4">精选博文</Menu.Item>
                                <Menu.Item key="5">常用代码块</Menu.Item>
                                <Menu.Item key="6">JS生态</Menu.Item>
                            </SubMenu>

                            <Menu.Item key="7">
                                <Icon type="file" />
                                <span>Git</span>
                            </Menu.Item>

                            <SubMenu
                            key="sub3"
                            title={<span><Icon type="team" /><span>NodeJS</span></span>}
                            >
                                <Menu.Item key="8">精选博文</Menu.Item>
                                <Menu.Item key="9">常用代码块</Menu.Item>
                                <Menu.Item key="10">NodeJS生态</Menu.Item>
                            </SubMenu>

                            <Menu.Item key="11">
                                <Icon type="file" />
                                <span>数据可视化</span>
                            </Menu.Item>

                            <Menu.Item key="12">
                                <Icon type="file" />
                                <span>小程序</span>
                            </Menu.Item>

                            <SubMenu
                            key="sub4"
                            title={<span><Icon type="team" /><span>构建工具</span></span>}
                            >
                                <Menu.Item key="13">Webpack</Menu.Item>
                                <Menu.Item key="14">gulp</Menu.Item>
                            </SubMenu>

                            <SubMenu
                            key="sub5"
                            title={<span><Icon type="team" /><span>数据库</span></span>}
                            >
                                <Menu.Item key="15">MySQL</Menu.Item>
                                <Menu.Item key="16">Redis</Menu.Item>
                                <Menu.Item key="17">MongoDB</Menu.Item>
                            </SubMenu>

                            <SubMenu
                            key="sub6"
                            title={<span><Icon type="team" /><span>APP方案</span></span>}
                            >
                                <Menu.Item key="15">React Native</Menu.Item>
                                <Menu.Item key="16">Weex</Menu.Item>
                                <Menu.Item key="17">Flutter</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{overflow: 'auto', height: '100vh'}}>
                        <Header style={{color: '#fff'}}>
                            <Row>
                                <Col span={7}>
                                    <span>欢迎进入代码研究院！想要获取更多信息，请关注：</span>
                                </Col>

                                {/* 社交账号 */}
                                <Col span={1}>
                                    <Icon type="zhihu" />
                                </Col>
                                <Col span={1}>
                                    <Icon type="wechat" />
                                </Col>
                                <Col span={1}>
                                    <Icon type="github" />
                                </Col>

                                <Col span={1} offset={13}>
                                    <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                                </Col>
                            </Row>
                        </Header>
                        <Content style={{flex: 1, overflow: 'auto'}}>
                            {this.props.children}
                        </Content>
                    </Layout>
                    
                </Layout>
            </div>
        )
    }
}
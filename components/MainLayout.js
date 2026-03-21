import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
import styles from '../styles/MainLayout.module.css';

const { Header, Sider, Content } = Layout;

export default function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const menuItems = [
    {
      key: '/',
      label: '🏠 首页',
    },
    {
      key: '/test',
      label: '🧪 测试分组',
    },
    {
      key: '/gallery',
      label: '🖼️ 相册',
    },
    {
      key: '/commits',
      label: '📝 Commits',
    },
    {
      key: '/learn',
      label: '👥 学习',
    },
    {
      key: '/three',
      label: '🎲 Three.js',
    },
    {
      key: '/weather',
      label: '🌤️ 天气',
    },
  ];

  const handleMenuClick = (e) => {
    router.push(e.key);
  };

  return (
    <Layout className={styles.layout} style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={200}
        theme="dark"
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className={styles.logo}>
          <h2 style={{ color: 'white', textAlign: 'center', margin: '20px 0', fontSize: '20px' }}>
            {!collapsed && 'Matrix'}
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={menuItems}
          onClick={handleMenuClick}
          selectedKeys={[router.pathname]}
          style={{ marginTop: '20px' }}
        />
      </Sider>

      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Header
          style={{
            background: '#fff',
            padding: '0 24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
            Matrix's Personal Website
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            style={{
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontSize: '18px',
            }}
          >
            {collapsed ? '▶' : '◀'}
          </button>
        </Header>

        <Content
          style={{
            margin: '24px 24px',
            padding: 24,
            background: '#fff',
            borderRadius: '8px',
            minHeight: 'calc(100vh - 144px)',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
import Head from 'next/head';
import { Card, Row, Col, Statistic } from 'antd';
import MainLayout from '@/components/MainLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Matrix's Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div>
          <h1>欢迎来到Matrix的个人网站</h1>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '40px' }}>
            这是一个基于 Next.js 和 Ant Design 的个人博客站点。
          </p>

          <h2 style={{ marginTop: '40px' }}>网站数据</h2>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={6}>
              <Card>
              <Statistic
                  title="已发布"
                  value={5}
                  prefix="📝"
                  valueStyle={{ color: '#1890ff' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card>
              <Statistic
                  title="项目"
                  value={8}
                  prefix="💻"
                  valueStyle={{ color: '#52c41a' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card>
              <Statistic
                  title="相册"
                  value={49}
                  prefix="🖼️"
                  valueStyle={{ color: '#faad14' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card>
              <Statistic
                  title="访客"
                  value={999}
                  prefix="👤"
                  valueStyle={{ color: '#f5222d' }}
                />
              </Card>
            </Col>
          </Row>

          <h2 style={{ marginTop: '40px' }}>关于我</h2>
          <Card>
            <p>
              我是一名全栈开发工程师，热爱编程和创新。擅长使用 React、Next.js、Node.js 等现代技术栈。
            </p>
            <p>
              在这个网站中，你可以了解我的项目、学习笔记、和一些有趣的代码示例。欢迎通过左侧菜单栏浏览各个功能模块。
            </p>
          </Card>

          <h2 style={{ marginTop: '40px' }}>快速导航</h2>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={6}>
              <Card
                title="测试分组"
                hoverable
                style={{ textAlign: 'center', cursor: 'pointer' }}
                onClick={() => window.location.href = '/test'}
              >
                <p>查看测试演示内容</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card
                title="相册"
                hoverable
                style={{ textAlign: 'center', cursor: 'pointer' }}
                onClick={() => window.location.href = '/gallery'}
              >
                <p>浏览图片展廊</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card
                title="Commits"
                hoverable
                style={{ textAlign: 'center', cursor: 'pointer' }}
                onClick={() => window.location.href = '/commits'}
              >
                <p>查看提交记录</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card
                title="Three.js"
                hoverable
                style={{ textAlign: 'center', cursor: 'pointer' }}
                onClick={() => window.location.href = '/three'}
              >
                <p>3D 展示</p>
              </Card>
            </Col>
          </Row>
        </div>
      </MainLayout>
    </>
  );
}
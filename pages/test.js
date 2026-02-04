import Head from 'next/head';
import { Card, Row, Col } from 'antd';
import MainLayout from '@/components/MainLayout';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function TestPage() {
  return (
    <>
      <Head>
        <title>Welcome Matrix's website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div>
          <h1>欢迎来到我的个人网站！</h1>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '40px' }}>
            这是一个基于 Next.js 和 Ant Design 的个人博客站点。请从左侧菜单栏选择你想浏览的内容。
          </p>
          
          <h2 style={{ marginTop: '40px' }}>功能模块</h2>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={6}>
              <Card
                title="首页"
                hoverable
                style={{ textAlign: 'center' }}
              >
                <p>网站首页，了解更多信息</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card
                title="Commits"
                hoverable
                style={{ textAlign: 'center' }}
              >
                <p>查看项目提交记录</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card
                title="相册"
                hoverable
                style={{ textAlign: 'center' }}
              >
                <p>浏览图片展廊</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card
                title="学习"
                hoverable
                style={{ textAlign: 'center' }}
              >
                <p>学习内容展示</p>
              </Card>
            </Col>
          </Row>

          <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
            <Col xs={24} sm={12} lg={6}>
              <Card
                title="Three.js"
                hoverable
                style={{ textAlign: 'center' }}
              >
                <p>3D 展示和交互</p>
              </Card>
            </Col>
          </Row>
        </div>
      </MainLayout>
    </>
  );
}
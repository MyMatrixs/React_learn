import Head from 'next/head';
import { Card, Row, Col, Tag, Progress } from 'antd';
import MainLayout from '@/components/MainLayout';

const weatherData = {
  city: '北京',
  condition: '晴转多云',
  temperature: 18,
  feelsLike: 16,
  humidity: 52,
  wind: '东北风 3 级',
  rainChance: 10,
  airQuality: '良',
};

const hourlyForecast = [
  { time: '09:00', temp: 12, icon: '🌤️' },
  { time: '12:00', temp: 17, icon: '☀️' },
  { time: '15:00', temp: 18, icon: '⛅' },
  { time: '18:00', temp: 15, icon: '🌥️' },
  { time: '21:00', temp: 11, icon: '🌙' },
];

export default function WeatherPage() {
  return (
    <>
      <Head>
        <title>天气 - Matrix&apos;s Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div>
          <h1>模拟天气页面</h1>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '24px' }}>
            这是一个前端静态模拟的天气展示页面，用来练习卡片布局与信息展示。
          </p>

          <Card style={{ marginBottom: '24px', borderRadius: '12px' }}>
            <Row gutter={[24, 24]} align="middle">
              <Col xs={24} md={12}>
                <div style={{ fontSize: '18px', color: '#888' }}>{weatherData.city}</div>
                <div style={{ fontSize: '52px', fontWeight: 'bold', color: '#1677ff', margin: '8px 0' }}>
                  {weatherData.temperature}°C
                </div>
                <div style={{ fontSize: '20px', marginBottom: '12px' }}>{weatherData.condition} ⛅</div>
                <Tag color="blue">体感 {weatherData.feelsLike}°C</Tag>
                <Tag color="green">空气质量 {weatherData.airQuality}</Tag>
              </Col>
              <Col xs={24} md={12}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <Card size="small" title="湿度">
                      <Progress percent={weatherData.humidity} size="small" />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card size="small" title="降雨概率">
                      <Progress percent={weatherData.rainChance} size="small" status="active" />
                    </Card>
                  </Col>
                  <Col span={24}>
                    <Card size="small" title="风况">
                      <p style={{ margin: 0 }}>{weatherData.wind}</p>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>

          <h2 style={{ marginBottom: '16px' }}>逐小时预报（模拟）</h2>
          <Row gutter={[16, 16]}>
            {hourlyForecast.map((item) => (
              <Col xs={12} sm={8} md={4} key={item.time}>
                <Card hoverable style={{ textAlign: 'center', borderRadius: '12px' }}>
                  <div style={{ fontSize: '15px', color: '#666' }}>{item.time}</div>
                  <div style={{ fontSize: '28px', margin: '8px 0' }}>{item.icon}</div>
                  <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{item.temp}°C</div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </MainLayout>
    </>
  );
}

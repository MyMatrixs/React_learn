/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    transpilePackages: [
        'antd',
        '@ant-design/icons',
        '@ant-design/icons-svg',
        '@rc-component/util',
    ],
}

module.exports = nextConfig

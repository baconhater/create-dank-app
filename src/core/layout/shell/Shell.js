import React from 'react';
import { Layout, Row, Col } from 'antd';

function Shell() {
  const { Header, Footer } = Layout;

  return (
    <Layout className="hero-section">
      <Layout>
        {true && <Header style={{ backgroundColor: '#FFFFFF' }} />}
        {true && (
          <Footer>
            <Row justify="end">
              <Col>Powered by joe mama</Col>
            </Row>
          </Footer>
        )}
      </Layout>
    </Layout>
  );
}

export default Shell();

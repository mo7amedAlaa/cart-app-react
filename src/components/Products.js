import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../css/product.css';

import { fetchProducts } from '../rtk/slices/products-slices';
import { addToCart } from '../rtk/slices/cart-slice';
function Products() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Container fluid>
      <Row className="flex-bettween">
        {products.map((product) => (
          <Col key={product.id} className="mb-3 w-fit " ms md={3}>
            <Card
              style={{
                width: '24rem',
                padding: '.5rem 1rem',
                wordBreak: 'break-all',
              }}
            >
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: '20rem', width: '90%' }}
              />
              <Card.Body>
                <Card.Title style={{ height: ' 50px', overflow: 'hidden' }}>
                  {product.title.slice(0)}
                </Card.Title>
                <Card.Text style={{ height: ' 75px', overflow: 'hidden' }}>
                  {product.description.slice(0)}
                </Card.Text>
                <Card.Text
                  style={{
                    color: 'green ',
                    fontWeight: 'bolder',
                    fontStyle: 'italic',
                  }}
                >
                  {product.price}$
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                >
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Products;

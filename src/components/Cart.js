import { Table, Container, Button } from 'react-bootstrap';
import '../css/cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { clear, deleteFromCart } from '../rtk/slices/cart-slice';
function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.amount;
    return acc;
  }, 0);
  return (
    <Container>
      <h1>Welcome To Cart Page</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            return (
              <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    width={'100px'}
                    height={'100px'}
                  />
                </td>
                <td>{product.price}</td>
                <td>{product.amount}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch(deleteFromCart(product));
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}

          <tr>
            <td
              colSpan={3}
              style={{
                textAlign: 'center',
                padding: '2px 15px',
                fontSize: '18px',
                fontWeight: 'bold',
                letterSpacing: '4px',
              }}
            >
              Total <span style={{ color: 'green' }}>Price</span> For All
              Products
            </td>
            <td> {totalPrice.toFixed(2)}$</td>
            <td colSpan={2}>
              <Button
                variant={'danger'}
                style={{ width: '100%' }}
                onClick={() => dispatch(clear())}
              >
                Clear Cart
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
export default Cart;

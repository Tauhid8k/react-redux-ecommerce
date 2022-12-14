import { Col, Image, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/cartSlice';

const CartItem = ({ id, name, image, quantity, countInStock, total }) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  const quantitySelectUpdate = (id, selectQuantity) => {
    dispatch(
      cartActions.quantitySelectUpdate({
        id,
        selectQuantity,
      })
    );
  };

  return (
    <Row className='align-items-center'>
      <Col md={2} className='mb-3 mb-md-0'>
        <Image src={image} alt={name} fluid rounded />
      </Col>
      <Col md={4} className='mb-0'>
        <h5>{name}</h5>
      </Col>
      <Col md={2} className='mb-3 mb-md-0 fw-bold'>
        ${total.toFixed(2)}
      </Col>
      <Col xs={8} md={2} className='text-center'>
        <select
          name=''
          className='form-select border-secondary text-center'
          value={quantity}
          onChange={(e) => quantitySelectUpdate(id, Number(e.target.value))}
        >
          {[...Array(countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
      </Col>
      <Col xs={4} md={2} className='d-flex'>
        <button
          type='button'
          className='btn btn-danger fs-5 flex-grow-1 flex-md-grow-0'
          onClick={() => removeFromCartHandler(id)}
        >
          <i className='fa-solid fa-trash-can'></i>
        </button>
      </Col>
    </Row>
  );
};

export default CartItem;

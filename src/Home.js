import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

const images = [{ src: 'https://cutt.ly/ke3x2y5', src: 'https://cutt.ly/ee3x2lR',src: 'https://cutt.ly/re3x2LP' }];

class Home extends React.Component {
  state = { modalIsOpen: true }
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  }
  render() {
    const { modalIsOpen } = this.state;

    return (
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={this.toggleModal}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    );
  }
}

export default Home;
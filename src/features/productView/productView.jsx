import React, { useState } from "react";
import _ from 'lodash';
import img1 from "./dial.png"
import { Row, Col, Select, InputNumber } from 'antd';
import Star from "../../utils/Star";


// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css'
function ProductView() {
    const handleDragStart = (e) => e.preventDefault();
    const { Option } = Select;
    const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
        return items.map((item, i) => (
            <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
                {item}
            </div>
        ));
    };

    const items = [
        <img src={img1} onDragStart={handleDragStart} />,
        <img src={img1} onDragStart={handleDragStart} />,
        <img src={img1} onDragStart={handleDragStart} />,
    ];
    const [mainIndex, setMainIndex] = useState(0);
    const [mainAnimation, setMainAnimation] = useState(false);
    const [thumbIndex, setThumbIndex] = useState(0);
    const [thumbAnimation, setThumbAnimation] = useState(false);
    const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]));

    const slideNext = () => {
        if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex + 1);
        }
    };

    const slidePrev = () => {
        if (!thumbAnimation && thumbIndex > 0) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex - 1);
        }
    };

    const syncMainBeforeChange = (e) => {
        setMainAnimation(true);
    };

    const syncMainAfterChange = (e) => {
        setMainAnimation(false);

        if (e.type === 'action') {
            setThumbIndex(e.item);
            setThumbAnimation(false);
        } else {
            setMainIndex(thumbIndex);
        }
    };

    const syncThumbs = (e) => {
        setThumbIndex(e.item);
        setThumbAnimation(false);

        if (!mainAnimation) {
            setMainIndex(e.item);
        }
    };
    return (
        <>
            <Row className="product_view" span={24}>
                <Col className="product_view_image" span={12} >
                    {/* <AliceCarousel
                        activeIndex={mainIndex}
                        animationType="fadeout"
                        animationDuration={800}
                        disableDotsControls
                        disableButtonsControls
                        infinite
                        items={items}
                        mouseTracking={!thumbAnimation}
                        onSlideChange={syncMainBeforeChange}
                        onSlideChanged={syncMainAfterChange}
                        touchTracking={!thumbAnimation}
                    />, */}
                    <div className="thumbs">
                        {/*  */}
                        <div className="btn-prev" onClick={slidePrev}>&lang;</div>
                        <div className="btn-next" onClick={slideNext}>&rang;</div>
                    </div>
                </Col>

                <Col className="product_view_data" span={12}>
                    <h1 className="product_view_data_name">
                        Faded Short Sleeves T-Shirt
          </h1>
                    {_.range(5).map((item) => (<Star />))}

                    <p className="product_view_data_price">$19.45</p>
                    <Row>
                        <Col span={16}><hr />
                            <p className="product_view_data_description">
                                Faded short sleeves t-shirt with high neckline. Soft and stretchy
                                material for a comfortable fit. Accessorize with a straw hat and
                                you're ready for summer!
          </p>
                            <p className="product_view_data_attributes">Size</p>
                            <Select defaultValue="lucy" style={{ width: 120 }}>
                                <Option value="jack">M</Option>
                                <Option value="lucy">S</Option>
                                <Option value="lucy">L</Option>
                            </Select>
                            <p className="product_view_data_atributes">Color</p>
                            <Row >
                                <Col><div className="product_view_item_colour"></div></Col>
                                <Col><div className="product_view_item_colour"></div></Col>
                            </Row>
                            <p className="product_view_data_atributes">quantity</p>
                            <Row >
                                <Col span={8}><InputNumber min={1} max={10} defaultValue={3} /> </Col>
                                <Col span={8}><button className="product_view_cart_button">Add to cart</button> </Col>
                                <Col span={8}><button>inStock</button> </Col>
                            </Row>
                            <p>Share</p></Col></Row>
                </Col>
            </Row>
        </>
    );
}

export default ProductView;

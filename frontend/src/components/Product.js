import React, {useState, useEffect, useRef} from 'react'
import {Image} from 'cloudinary-react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './Product.css'
export default function Products(props) {

  const [openDesc, setOpenDesc] = useState(false);
  const [openIngred, setOpenIngred] = useState(false);
  const handleClickOpenDesc = () => () => {
    setOpenDesc(true);
  };
  const handleCloseDesc = () => {
    setOpenDesc(false);
  };
  const descriptionElementRefDesc = useRef(null);
  useEffect(() => {
    if (openDesc) {
      const { current: descriptionElementDesc } = descriptionElementRefDesc;
      if (descriptionElementDesc !== null) {
        descriptionElementDesc.focus();
      }
    }
  }, [openDesc]);
  const handleClickOpenIngred = () => () => {
    setOpenIngred(true);
  };
  const handleCloseIngred = () => {
    setOpenIngred(false);
  };
  const descriptionElementRefIngred = useRef(null);
  useEffect(() => {
    if (openIngred) {
      const { current: descriptionElementIngred } = descriptionElementRefIngred;
      if (descriptionElementIngred !== null) {
        descriptionElementIngred.focus();
      }
    }
  }, [openIngred]);


  return (
    <div className="Product">
      <div className="product-name">{props.product.name}</div>
      <Image cloudName="deonleer" publicId={`${props.product.id}/1.png`} className="product-image"/>
      <div className="size">{props.product.size}{props.product.size_unit}</div>
      <div className="cbd-content">CBD Content: {props.product.cbd_mg} mg</div>
      <div className="thc-percent">THC Content: {props.product.thc_percent*0.01}%</div>
      <div className="product-price">${props.product.price}.00</div>
      <button onClick={handleClickOpenDesc('paper')}>More Info</button>
      <button onClick={handleClickOpenIngred('paper')}>View Ingredients</button>
      <Dialog
        open={openDesc}
        onClose={handleCloseDesc}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Description</DialogTitle>
        <DialogContent >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRefDesc}
            tabIndex={-1}
          >
            {props.product.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDesc} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openIngred}
        onClose={handleCloseIngred}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Ingredients</DialogTitle>
        <DialogContent >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRefIngred}
            tabIndex={-1}
          >
            {props.product.ingredients}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseIngred} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>

  )
}
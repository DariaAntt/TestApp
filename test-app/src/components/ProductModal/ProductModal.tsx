import React from "react";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Product } from "../ProductCard/ProductCard";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export function ProductModal({ product, open, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="product-modal-title"
      aria-describedby="product-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: 320, sm: 400 },
          bgcolor: "background.paper",
          borderRadius: 1,
          boxShadow: 24,
          p: 2,
          outline: "none",
        }}
      >
        <IconButton
          aria-label="закрыть"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "200px",
            objectFit: "contain",
            borderRadius: 4,
            marginBottom: 16,
          }}
        />

        <Typography
          id="product-modal-title"
          variant="h6"
          component="h2"
          gutterBottom
        >
          {product.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" paragraph>
          {product.description}
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          {product.price} ₽
        </Typography>

        <Button variant="contained" color="primary" fullWidth>
          Купить
        </Button>
      </Box>
    </Modal>
  );
}

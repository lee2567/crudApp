import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Notification = ({ message }) => (
  <AnimatePresence>
    {message && (
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg"
      >
        {message}
      </motion.div>
    )}
  </AnimatePresence>
);

export default Notification;
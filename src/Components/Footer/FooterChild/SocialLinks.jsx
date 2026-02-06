import { motion } from "motion/react";
import payment from "../../../images/credit-cards.webp";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterFill,
  RiTelegramFill,
} from "react-icons/ri";

export default function SocialLinks() {
  return (
    <div className="mt-5 text-white">
      <motion.h1
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 1,
          type: "spring",
          bounce: 0.2,
        }}
        className="text-3xl font-bold"
      >
        Follow us
      </motion.h1>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 1,
          type: "spring",
          bounce: 0.2,
        }}
        className="flex gap-3 mt-3"
      >
        <RiFacebookCircleFill size={24} color="rgba(255,255,255,1)" />
        <RiInstagramFill size={24} color="rgba(255,255,255,1)" />
        <RiTwitterFill size={24} color="rgba(255,255,255,1)" />
        <RiTelegramFill size={24} color="rgba(255,255,255,1)" />
      </motion.div>
      <div className="mt-6">
        <motion.h1
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 1,
            type: "spring",
            bounce: 0.2,
          }}
          className="text-sm font-bold"
        >
          Payment Methods
        </motion.h1>
        <motion.img
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: "spring",
            bounce: 0.2,
          }}
          src={payment}
          alt="cards"
          className="mt-3 h-6"
        />
      </div>
    </div>
  );
}

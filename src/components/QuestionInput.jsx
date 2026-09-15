"use client";

import { memo, useState } from "react";
import { motion } from "framer-motion";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function QuestionInput({
  inputValue,
  onInputChange,
  maxWidth = "700px",
  borderColor = "#3B82F6",
  buttonColor = "#1E3A8A",
  disableInitialAnimation = false,
  compact = false,
  source = "landing",
  inverted = false,
}) {
  const [internalValue, setInternalValue] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const controlled = inputValue !== undefined;
  const email = controlled ? inputValue : internalValue;

  const updateEmail = (value) => {
    if (controlled && onInputChange) onInputChange(value);
    else setInternalValue(value);
    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();

    if (!EMAIL_PATTERN.test(normalizedEmail)) {
      setStatus("error");
      setMessage("이메일 주소를 다시 확인해주세요.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: normalizedEmail,
          source,
          website: formData.get("website"),
        }),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.message || "신청을 완료하지 못했어요.");

      if (controlled && onInputChange) onInputChange("");
      else setInternalValue("");
      setStatus("success");
      setMessage(
        result.duplicate
          ? "이미 신청된 이메일이에요. 출시 소식을 기다려주세요."
          : "신청이 완료됐어요. MAKO 소식을 가장 먼저 보내드릴게요.",
      );
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`waitlist-form ${compact ? "waitlist-form--compact" : ""} ${inverted ? "waitlist-form--inverted" : ""}`}
      style={{ maxWidth }}
      initial={disableInitialAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={disableInitialAnimation ? { duration: 0 } : { duration: 0.6, ease: "easeOut", delay: 0.65 }}
    >
      <div className="waitlist-control" style={{ borderColor }}>
        <i className="ri-mail-line waitlist-mail-icon" aria-hidden="true" />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => updateEmail(event.target.value)}
          autoComplete="email"
          inputMode="email"
          required
          aria-label="웨잇리스트 이메일"
          aria-describedby={`${source}-waitlist-feedback`}
          placeholder="이메일 주소를 입력하세요"
          className="waitlist-input"
        />
        <input type="hidden" name="website" value="" />
        <motion.button
          type="submit"
          disabled={status === "submitting"}
          className="waitlist-submit"
          style={{ backgroundColor: buttonColor }}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>{status === "submitting" ? "신청 중" : "웨잇리스트"}</span>
          <i className={status === "submitting" ? "ri-loader-4-line waitlist-spinner" : "ri-arrow-right-line"} aria-hidden="true" />
        </motion.button>
      </div>
      <div id={`${source}-waitlist-feedback`} className="waitlist-feedback" aria-live="polite">
        {message ? (
          <span className={status === "error" ? "waitlist-feedback--error" : "waitlist-feedback--success"}>
            <i className={status === "error" ? "ri-error-warning-line" : "ri-checkbox-circle-line"} aria-hidden="true" />
            {message}
          </span>
        ) : !compact ? (
          <span>
            신청 시 <a href="/privacy">개인정보처리방침</a>에 동의하게 됩니다.
          </span>
        ) : null}
      </div>
    </motion.form>
  );
}

export default memo(QuestionInput);

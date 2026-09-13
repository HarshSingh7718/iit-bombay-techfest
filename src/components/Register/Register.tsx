'use client';

import { useState } from 'react';
import styles from './Register.module.css';

interface Toast { message: string; visible: boolean }

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [toast, setToast]   = useState<Toast>({ message: '', visible: false });
  const [name, setName]     = useState('');
  const [email, setEmail]   = useState('');
  const [college, setCollege] = useState('');
  const [interest, setInterest] = useState('');

  const showToast = (msg: string) => {
    setToast({ message: msg, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 4500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSuccess(true);
    showToast(`🎉 Welcome to Techfest 2026, ${name}! Check your email for confirmation.`);
    setTimeout(() => {
      setSuccess(false);
      setName(''); setEmail(''); setCollege(''); setInterest('');
    }, 4000);
  };

  return (
    <>
      <section className={styles.section} id="register">
        <div className={styles.bgGlow} />
        <div className="container">
          <div className={styles.inner}>
            <div className={styles.text}>
              <span className="section-tag">Join the Renaissance</span>
              <h2 className="section-title">
                Ready to Make<br />
                <em>History?</em>
              </h2>
              <p>
                Compete. Create. Connect. Experience the most electrifying 3 days in India&apos;s
                tech calendar. Registration is free for all students.
              </p>
              <ul className={styles.perks}>
                <li>✨ Free Event Registration</li>
                <li>🎓 IIT Bombay Certificates</li>
                <li>🌐 Global Networking</li>
                <li>🏠 On-Campus Accommodation Available</li>
                <li>🏆 ₹12 Crore+ in Prizes</li>
              </ul>
            </div>

            <div className={styles.formWrap}>
              <form className={styles.form} onSubmit={handleSubmit} id="registration-form">
                <h3>Quick Registration</h3>

                <div className={styles.group}>
                  <input
                    id="reg-name"
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.group}>
                  <input
                    id="reg-email"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.group}>
                  <input
                    id="reg-college"
                    type="text"
                    placeholder="College / University"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.group}>
                  <select
                    id="reg-interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  >
                    <option value="" disabled>Area of Interest</option>
                    {['Competitions', 'Workshops', 'Speaker Sessions', 'Tech Expo', 'Everything!'].map(
                      (o) => <option key={o}>{o}</option>
                    )}
                  </select>
                </div>

                <button
                  id="reg-submit"
                  type="submit"
                  className={`btn btn-primary btn-full ${success ? styles.success : ''}`}
                  disabled={loading || success}
                >
                  {loading ? (
                    <>
                      <span>Processing...</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ animation: 'spin .8s linear infinite' }}>
                        <circle cx="12" cy="12" r="10" strokeOpacity={0.3} />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                    </>
                  ) : success ? (
                    <span>✅ Registered Successfully!</span>
                  ) : (
                    <>
                      <span>Register for Techfest 2026</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>

                <p className={styles.note}>
                  By registering, you agree to our Terms &amp; Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Toast */}
      <div className={`${styles.toast} ${toast.visible ? styles.toastVisible : ''}`}>
        {toast.message}
      </div>
    </>
  );
}

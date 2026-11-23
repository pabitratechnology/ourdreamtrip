import { FaEnvelopeOpenText, FaPaperPlane, FaShieldAlt } from 'react-icons/fa';

export default function SmtpTab({
  smtpStatus,
  appPasswordInput,
  setAppPasswordInput,
  smtpMsg,
  smtpErr,
  smtpLoading,
  handleSaveSmtp,
  testEmailTarget,
  setTestEmailTarget,
  testEmailMsg,
  testEmailErr,
  testEmailLoading,
  handleSendTestEmail
}) {
  return (
    <div className="admin-tab-content">
      <div className="admin-controls-card glass-card">
        <div className="controls-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ margin: 0 }}>Direct Email Dispatch &amp; Nodemailer Setup</h3>
            <span className="meta-sub" style={{ fontSize: '0.84rem', color: '#64748b' }}>
              Connect your Gmail address using a 16-character Google App Password
            </span>
          </div>
          <div className="live-pulse-badge">
            {smtpStatus?.isConfigured ? '🟢 Live Nodemailer Connected' : '🟡 Offline Mock Mode Active'}
          </div>
        </div>
      </div>

      <div className="settings-two-col-grid" style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Left Column: Form & Connection Status */}
        <div className="admin-section-block glass-card">
          <div className="block-head-row">
            <h3 style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
              <FaEnvelopeOpenText style={{ color: '#0284c7', marginRight: '8px' }} /> Gmail SMTP Credentials
            </h3>
          </div>

          <div className="smtp-status-banner" style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', marginTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Target Inbox:</span>
              <strong>ourdreamtrip1@gmail.com</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>SMTP Host:</span>
              <code>smtp.gmail.com:587</code>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Current Status:</span>
              <strong style={{ color: smtpStatus?.isConfigured ? '#059669' : '#d97706' }}>
                {smtpStatus?.isConfigured
                  ? 'Connected (Real Emails Dispatched)'
                  : 'Local Mock Delivery (Logged to backend/logs)'}
              </strong>
            </div>
          </div>

          {smtpMsg && <div className="admin-success-box" style={{ marginTop: '1rem' }}>{smtpMsg}</div>}
          {smtpErr && <div className="admin-error-box" style={{ marginTop: '1rem' }}>{smtpErr}</div>}

          <form onSubmit={handleSaveSmtp} className="admin-form" style={{ padding: '0', marginTop: '1.25rem' }}>
            <div className="form-field-group">
              <label>Google 16-Character App Password *</label>
              <input
                type="password"
                value={appPasswordInput}
                onChange={e => setAppPasswordInput(e.target.value)}
                placeholder="e.g. abcd efgh ijkl mnop"
                required
              />
              <small style={{ color: '#64748b' }}>Spaces will be stripped automatically. Never enter your standard Gmail login password.</small>
            </div>

            <button type="submit" className="btn btn-yellow btn-full" disabled={smtpLoading}>
              {smtpLoading ? 'Saving...' : 'Save & Connect 16-Character App Password'}
            </button>
          </form>

          <hr style={{ margin: '1.75rem 0 1.25rem', borderColor: '#e2e8f0' }} />

          <div className="block-head-row">
            <h4 style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
              <FaPaperPlane style={{ color: '#0284c7', marginRight: '6px' }} /> Verify Live Delivery
            </h4>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '0.4rem 0 0.8rem' }}>
            Send a live test verification email right now to check that Nodemailer is delivering into your mailbox.
          </p>

          {testEmailMsg && <div className="admin-success-box">{testEmailMsg}</div>}
          {testEmailErr && <div className="admin-error-box">{testEmailErr}</div>}

          <form onSubmit={handleSendTestEmail} style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <input
              type="email"
              value={testEmailTarget}
              onChange={e => setTestEmailTarget(e.target.value)}
              placeholder="ourdreamtrip1@gmail.com"
              required
              style={{ flex: 1, minWidth: '200px', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.88rem' }}
            />
            <button type="submit" className="btn btn-navy" disabled={testEmailLoading}>
              {testEmailLoading ? 'Dispatching...' : 'Send Test Email'}
            </button>
          </form>
        </div>

        {/* Right Column: Step-by-Step Guide on How to get 16-character password */}
        <div className="admin-section-block glass-card instruction-guide-card">
          <div className="block-head-row">
            <h3 style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
              <FaShieldAlt style={{ color: '#ffb300', marginRight: '8px' }} /> How to Get Your 16-Character App Password
            </h3>
          </div>

          <div className="instruction-step-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <div className="instruction-step" style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
              <span className="step-num-badge" style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#06245F', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, flexShrink: 0 }}>1</span>
              <div>
                <strong>Turn ON 2-Step Verification</strong>
                <p style={{ fontSize: '0.84rem', color: '#64748b', margin: '0.2rem 0 0' }}>Go to your <a href="https://myaccount.google.com/security" target="_blank" rel="noreferrer" style={{ color: '#0284c7', textDecoration: 'underline' }}>Google Account Security</a>. Under &quot;How you sign in to Google&quot;, ensure <strong>2-Step Verification</strong> is enabled.</p>
              </div>
            </div>

            <div className="instruction-step" style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
              <span className="step-num-badge" style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#06245F', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, flexShrink: 0 }}>2</span>
              <div>
                <strong>Open App Passwords Page</strong>
                <p style={{ fontSize: '0.84rem', color: '#64748b', margin: '0.2rem 0 0' }}>Visit <a href="https://myaccount.google.com/apppasswords" target="_blank" rel="noreferrer" style={{ color: '#0284c7', textDecoration: 'underline' }}>https://myaccount.google.com/apppasswords</a> directly.</p>
              </div>
            </div>

            <div className="instruction-step" style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
              <span className="step-num-badge" style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#06245F', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, flexShrink: 0 }}>3</span>
              <div>
                <strong>Create App Name</strong>
                <p style={{ fontSize: '0.84rem', color: '#64748b', margin: '0.2rem 0 0' }}>In the &quot;App name&quot; box, type <code>Our Dream Trip</code> and click <strong>Create</strong>.</p>
              </div>
            </div>

            <div className="instruction-step" style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
              <span className="step-num-badge" style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#06245F', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, flexShrink: 0 }}>4</span>
              <div>
                <strong>Copy the 16 Characters</strong>
                <p style={{ fontSize: '0.84rem', color: '#64748b', margin: '0.2rem 0 0' }}>Google displays a yellow dialog showing your 16-character code (e.g. <code>abcd efgh ijkl mnop</code>).</p>
              </div>
            </div>

            <div className="instruction-step" style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
              <span className="step-num-badge" style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#ffb300', color: '#06245F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, flexShrink: 0 }}>5</span>
              <div>
                <strong>Paste and Click Save</strong>
                <p style={{ fontSize: '0.84rem', color: '#64748b', margin: '0.2rem 0 0' }}>Paste that code into the field on the left and click <strong>Save &amp; Connect</strong>. All customer bookings will now deliver directly to <code>ourdreamtrip1@gmail.com</code>!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

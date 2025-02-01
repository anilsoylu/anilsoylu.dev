const styles = {
  container: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  },
  header: {
    backgroundColor: "#000000",
    padding: "24px",
    textAlign: "center" as const,
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: "24px",
    margin: "0",
    fontWeight: "600",
    letterSpacing: "0.025em",
  },
  infoSection: {
    padding: "24px",
    backgroundColor: "#f9fafb",
    borderBottom: "1px solid #e5e7eb",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  labelCell: {
    padding: "12px",
    width: "120px",
    color: "#6b7280",
    fontSize: "14px",
    verticalAlign: "top",
  },
  valueCell: {
    padding: "12px",
    color: "#111827",
    fontSize: "14px",
  },
  emailLink: {
    color: "#2563eb",
    textDecoration: "none",
  },
  boldValue: {
    fontWeight: "500",
  },
  messageSection: {
    padding: "24px",
    backgroundColor: "#ffffff",
  },
  messageContainer: {
    marginBottom: "16px",
  },
  subject: {
    color: "#111827",
    fontSize: "18px",
    fontWeight: "600",
    marginTop: "0",
    marginBottom: "16px",
  },
  messageText: {
    color: "#374151",
    fontSize: "14px",
    lineHeight: "1.625",
    whiteSpace: "pre-wrap" as const,
  },
  footer: {
    padding: "16px 24px",
    backgroundColor: "#f9fafb",
    borderTop: "1px solid #e5e7eb",
    textAlign: "center" as const,
  },
  footerText: {
    margin: "0",
    color: "#6b7280",
    fontSize: "12px",
  },
} as const

interface EmailTemplateProps {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  date: string
}

export const EmailTemplate = ({
  name,
  email,
  phone,
  subject,
  message,
  date,
}: EmailTemplateProps) => (
  <div style={styles.container}>
    <div style={styles.header}>
      <h1 style={styles.headerTitle}>New Contact Form Message</h1>
    </div>

    <div style={styles.infoSection}>
      <table style={styles.table}>
        <tbody>
          <tr>
            <td style={styles.labelCell}>From</td>
            <td style={{ ...styles.valueCell, ...styles.boldValue }}>{name}</td>
          </tr>
          <tr>
            <td style={styles.labelCell}>Email</td>
            <td style={styles.valueCell}>
              <a href={`mailto:${email}`} style={styles.emailLink}>
                {email}
              </a>
            </td>
          </tr>
          {phone && (
            <tr>
              <td style={styles.labelCell}>Phone</td>
              <td style={styles.valueCell}>{phone}</td>
            </tr>
          )}
          <tr>
            <td style={styles.labelCell}>Date</td>
            <td style={styles.valueCell}>{date}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style={styles.messageSection}>
      <div style={styles.messageContainer}>
        <h2 style={styles.subject}>{subject}</h2>
        <div style={styles.messageText}>{message}</div>
      </div>
    </div>

    <div style={styles.footer}>
      <p style={styles.footerText}>
        This is an automated message from your website contact form
      </p>
    </div>
  </div>
)

export default EmailTemplate

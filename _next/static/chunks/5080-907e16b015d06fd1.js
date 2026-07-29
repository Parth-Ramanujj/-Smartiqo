"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5080],
  {
    15080: (r, e, t) => {
      t.d(e, { default: () => i });
      var o = t(95155),
        n = t(12115);
      class s extends n.Component {
        static getDerivedStateFromError(r) {
          return { hasError: !0, error: r };
        }
        componentDidCatch(r, e) {
          console.error("ErrorBoundary caught an error:", r, e),
            this.props.onError && this.props.onError(r, e);
          try {
            fetch("/api/logs", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                error: r.message,
                stack: r.stack,
                componentStack: e.componentStack,
                timestamp: new Date().toISOString(),
              }),
            }).catch(() => {});
          } catch (r) {}
        }
        render() {
          return this.state.hasError
            ? this.props.fallback
              ? this.props.fallback
              : (0, o.jsx)("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "400px",
                    padding: "2rem",
                    textAlign: "center",
                  },
                  children: (0, o.jsxs)("div", {
                    style: {
                      maxWidth: "600px",
                      padding: "2rem",
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    },
                    children: [
                      (0, o.jsx)("h2", {
                        style: { color: "#d32f2f", marginBottom: "1rem" },
                        children: "Something went wrong",
                      }),
                      (0, o.jsx)("p", {
                        style: { color: "#666", marginBottom: "1.5rem" },
                        children:
                          "We encountered an unexpected error. Please try again or navigate to a different page.",
                      }),
                      this.state.error &&
                        (0, o.jsxs)("details", {
                          style: { marginBottom: "1.5rem", textAlign: "left" },
                          children: [
                            (0, o.jsx)("summary", {
                              style: { cursor: "pointer", color: "#1976d2" },
                              children: "Error details",
                            }),
                            (0, o.jsx)("pre", {
                              style: {
                                marginTop: "1rem",
                                padding: "1rem",
                                backgroundColor: "#f5f5f5",
                                borderRadius: "4px",
                                overflow: "auto",
                                fontSize: "0.875rem",
                                color: "#d32f2f",
                              },
                              children: this.state.error.message,
                            }),
                          ],
                        }),
                      (0, o.jsxs)("div", {
                        style: {
                          display: "flex",
                          gap: "1rem",
                          justifyContent: "center",
                        },
                        children: [
                          (0, o.jsx)("button", {
                            onClick: this.handleRetry,
                            style: {
                              padding: "0.75rem 1.5rem",
                              backgroundColor: "#1976d2",
                              color: "#fff",
                              border: "none",
                              borderRadius: "4px",
                              cursor: "pointer",
                              fontSize: "1rem",
                            },
                            children: "Try Again",
                          }),
                          (0, o.jsx)("button", {
                            onClick: () => (window.location.href = "/"),
                            style: {
                              padding: "0.75rem 1.5rem",
                              backgroundColor: "#fff",
                              color: "#1976d2",
                              border: "1px solid #1976d2",
                              borderRadius: "4px",
                              cursor: "pointer",
                              fontSize: "1rem",
                            },
                            children: "Go Home",
                          }),
                        ],
                      }),
                    ],
                  }),
                })
            : this.props.children;
        }
        constructor(r) {
          super(r),
            (this.handleRetry = () => {
              this.setState({ hasError: !1, error: null });
            }),
            (this.state = { hasError: !1, error: null });
        }
      }
      let i = s;
    },
  },
]);

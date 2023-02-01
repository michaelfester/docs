// copy/pasted and modified a bit to include a message

import { useState } from "react";

export interface LoginComponentProps {
  apiUrl?: string;
  backUrl?: string;
  /* @default #01EDBC */
  buttonBackgroundColor?: string;
  /* @default #111 */
  buttonColor?: string;
  logo?: string;
}

export const LoginComponent = ({
  apiUrl,
  backUrl,
  logo,
}: LoginComponentProps) => {
  const [isBusy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async e => {
    e.preventDefault();
    e.stopPropagation();

    if (isBusy) {
      return;
    }

    setBusy(true);
    setError("");

    try {
      const form = document.querySelector(
        "#password-form form"
      ) as HTMLFormElement;

      const formData = new FormData(form);

      const res = await fetch(apiUrl || `/api/login`, {
        method: "post",
        credentials: "include",
        body: JSON.stringify({ password: formData.get("password") }),
        headers: { "Content-Type": "application/json" },
      });

      const { message } = await res.json();

      if (res.status === 200) {
        window.location.reload();
      } else {
        setError(message);
        setBusy(false);
      }
    } catch (e) {
      setError("An error has occured.");
      setBusy(false);
    }

    return false;
  };

  const image = !!logo && (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      width="130"
      height="auto"
      src={logo}
      alt="Logo"
      style={{ marginBottom: "40px" }}
    />
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "100vw",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <div
        className="bg-slate-400"
        style={{
          maxWidth: "100%",
          display: "flex",
          flex: 1,
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
            body {
              margin: 0;
            }

            * {
              box-sizing: border-box;
            }

            .link {
              font-style: normal;
              text-decoration: none;
              color: #666;
              transition: color 0.2s ease-out;
            }

            .link:hover, .link:focus {
              color: #111;
            }

            #password-form * {
              font-family: 'Karla', sans-serif;
            }

            #password-form h1 {
              font-family: 'Filson W01', sans-serif;
            }

            #password-form .invalid {
              outline: auto 1px;
              outline-color: #DD4A4A;
              animation: shake .4s linear;
            }

            #password-form .error {
              color: #DD4A4A;
              margin-top: 12px;
              font-size: 18px;
            }

            @keyframes shake {
              8%, 41% {
                transform: translateX(-10px);
              }
              25%, 58% {
                transform: translateX(10px);
              }
              75% {
                transform: translateX(-5px);
              }
              92% {
                transform: translateX(5px);
              }
              0%, 100% {
                transform: translateX(0);
              }
            }
          `,
          }}
        />

        {!!image && <>{backUrl ? <a href={backUrl}>{image}</a> : image}</>}
        <div
          id="password-form"
          className="flex flex-col p-8 bg-white rounded-lg shadow-2xl w-96"
        >
          <div className="text-center">
            <img src="/docs/arent-docs.jpeg" />
            <p className="my-5">
              Visit{" "}
              <a href="https://docs.glideapps.com/" className="underline">
                docs.glideapps.com
              </a>{" "}
              instead
            </p>
          </div>
          <form
            data-testid="form"
            onSubmit={onSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <input
              className={error ? "invalid" : ""}
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              required
              style={{
                background: "#F5F5F5",
                borderRadius: "4px",
                padding: "0 16px",
                fontSize: "18px",
                color: "#525252",
                border: "none",
                height: "48px",
              }}
            />
            {!!error && (
              <div className="error" data-testid="error">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isBusy}
              style={{
                appearance: "none",
                borderRadius: "52px",
                border: "none",
                padding: "12px 32px",
                fontSize: "20px",
                marginTop: "32px",
                cursor: "pointer",
                textAlign: "center",
              }}
              className="text-white bg-aqua"
            >
              {isBusy ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
        {!!backUrl && (
          <a href={backUrl} className="link">
            ← Back to main website
          </a>
        )}
      </div>
    </div>
  );
};

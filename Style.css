<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta name="theme-color" content="#0F172A" />
  <title>TRUCKGO USA – Fast Onboarding for Courier, Owner & Driver</title>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script src="https://js.stripe.com/v3/"></script>
  <style>
    :root {
      --navy: #0F172A;
      --navy-mid: #1E293B;
      --orange: #F97316;
      --blue: #2563EB;
      --green: #16A34A;
      --purple: #7C3AED;
      --teal: #0F766E;
      --red: #DC2626;
      --bg: #F1F5F9;
      --card: #FFFFFF;
      --text: #0F172A;
      --muted: #64748B;
      --border: #E2E8F0;
      --green-bg: #DCFCE7;
      --amber: #D97706;
      --amber-bg: #FEF3C7;
      --blue-bg: #DBEAFE;
      --purple-bg: #EDE9FE;
      --teal-bg: #CCFBF1;
      --red-bg: #FEE2E2;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Nastaliq Urdu", sans-serif;
      background: var(--bg);
      color: var(--text);
      padding-bottom: 92px;
    }

    body.rtl { direction: rtl; }

    .app-header {
      background: var(--navy);
      color: #FFFFFF;
      padding: 10px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6px;
      position: sticky;
      top: 0;
      z-index: 40;
      box-shadow: 0 2px 12px rgba(15, 23, 42, 0.25);
    }

    .logo-wrap {
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: 800;
      font-size: 16px;
    }

    .logo-pill {
      background: var(--orange);
      color: #FFFFFF;
      font-size: 10px;
      font-weight: 800;
      padding: 3px 6px;
      border-radius: 6px;
    }

    .lang-group { display: flex; gap: 4px; }

    .lang-btn {
      background: #1E293B;
      color: #E2E8F0;
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 8px;
      padding: 4px 7px;
      font-size: 11px;
      font-weight: 800;
      cursor: pointer;
    }

    .lang-btn.active {
      background: var(--orange);
      color: #FFFFFF;
      border-color: var(--orange);
    }

    .user-chip {
      font-size: 11px;
      background: var(--navy-mid);
      padding: 5px 8px;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.14);
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .container { max-width: 860px; margin: 0 auto; padding: 16px; }

    .card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 18px;
      margin-bottom: 16px;
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
    }

    .banner {
      color: #FFFFFF;
      border-radius: 18px;
      padding: 20px;
      margin-bottom: 16px;
    }

    .banner-auth { background: linear-gradient(135deg, #0F172A, #1E293B); }
    .banner-owner { background: linear-gradient(135deg, #9A3412, #EA580C); }
    .banner-driver { background: linear-gradient(135deg, #14532D, #16A34A); }
    .banner-courier { background: linear-gradient(135deg, #1E3A8A, #2563EB); }
    .banner-staff { background: linear-gradient(135deg, #115E59, #0F766E); }
    .banner-admin { background: linear-gradient(135deg, #4C1D95, #7C3AED); }

    .banner h1 { font-size: 20px; margin-bottom: 5px; }
    .banner p { font-size: 13px; opacity: 0.92; }

    h2 { font-size: 16px; margin-bottom: 12px; color: var(--navy); }

    .home-tiles-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin-bottom: 14px;
    }

    .home-box-tile {
      border: 2px solid var(--border);
      background: #F8FAFC;
      border-radius: 16px;
      padding: 14px;
      text-align: start;
      cursor: pointer;
    }

    .home-box-tile[data-box="drivers"] { border-color: #86EFAC; background: #F0FDF4; }
    .home-box-tile[data-box="loads"] { border-color: #93C5FD; background: #EFF6FF; }
    .home-box-tile[data-box="owner"] { border-color: #FDBA74; background: #FFF7ED; }
    .home-box-tile[data-box="courier"] { border-color: #A5B4FC; background: #EEF2FF; }

    .tile-badge {
      display: inline-block;
      font-size: 10px;
      font-weight: 800;
      padding: 2px 7px;
      border-radius: 999px;
      background: #FFFFFF;
      color: var(--navy);
      border: 1px solid var(--border);
      margin-bottom: 6px;
    }

    .tile-title {
      display: block;
      font-size: 15px;
      font-weight: 800;
      color: var(--navy);
    }

    .tile-sub {
      display: block;
      font-size: 11px;
      color: var(--muted);
      margin-top: 3px;
    }

    .role-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      margin-bottom: 14px;
    }

    .role-card {
      border: 2px solid var(--border);
      background: #F8FAFC;
      border-radius: 14px;
      padding: 10px;
      text-align: start;
      cursor: pointer;
    }

    .role-card.active[data-role="owner"] { border-color: var(--orange); background: #FFF7ED; }
    .role-card.active[data-role="driver"] { border-color: var(--green); background: #F0FDF4; }
    .role-card.active[data-role="courier"] { border-color: var(--blue); background: #EFF6FF; }

    .role-tag {
      display: inline-block;
      font-size: 9px;
      font-weight: 800;
      padding: 2px 6px;
      border-radius: 999px;
      background: #E2E8F0;
      color: var(--navy);
      margin-bottom: 4px;
    }

    .role-title { font-weight: 800; font-size: 13px; color: var(--navy); display: block; }
    .role-desc { font-size: 10px; color: var(--muted); display: block; margin-top: 2px; }

    .doc-box {
      background: #F8FAFC;
      border: 1px dashed #94A3B8;
      border-radius: 14px;
      padding: 14px;
      margin-bottom: 12px;
    }

    .pay-box {
      background: #F8FAFC;
      border: 1px solid #CBD5E1;
      border-radius: 14px;
      padding: 12px;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .pay-methods-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
      margin-bottom: 10px;
    }

    .pay-chip-btn {
      border: 1.5px solid var(--border);
      background: #FFFFFF;
      color: var(--navy);
      border-radius: 10px;
      padding: 9px 10px;
      font-size: 12px;
      font-weight: 800;
      cursor: pointer;
      text-align: center;
    }

    .pay-chip-btn.active {
      border-color: var(--blue);
      background: #EFF6FF;
      color: var(--blue);
    }

    .field { margin-bottom: 12px; }
    .field label {
      display: block;
      font-size: 12px;
      font-weight: 700;
      color: #334155;
      margin-bottom: 4px;
    }

    .field input,
    .field select {
      width: 100%;
      padding: 11px 12px;
      border: 1px solid var(--border);
      border-radius: 12px;
      font-size: 14px;
      background: #FFFFFF;
      color: var(--text);
      font-family: inherit;
    }

    .rate-summary {
      background: #EFF6FF;
      border: 1px solid #BFDBFE;
      border-radius: 14px;
      padding: 12px 14px;
      margin-bottom: 12px;
      font-size: 13px;
    }

    .rate-line { display: flex; justify-content: space-between; margin-bottom: 4px; }

    .rate-total {
      font-weight: 800;
      font-size: 15px;
      color: var(--navy);
      border-top: 1px solid #BFDBFE;
      padding-top: 6px;
      margin-top: 6px;
    }

    .btn {
      width: 100%;
      padding: 12px 15px;
      border: none;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
    }

    .btn:disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }

    .btn-orange { background: var(--orange); color: #FFFFFF; }
    .btn-green { background: var(--green); color: #FFFFFF; }
    .btn-blue { background: var(--blue); color: #FFFFFF; }
    .btn-purple { background: var(--purple); color: #FFFFFF; }
    .btn-teal { background: var(--teal); color: #FFFFFF; }
    .btn-red { background: var(--red); color: #FFFFFF; }
    .btn-dark { background: var(--navy); color: #FFFFFF; }
    .btn-outline { background: #FFFFFF; color: var(--navy); border: 1px solid var(--border); }
    .btn-sm { width: auto; padding: 7px 11px; font-size: 12px; border-radius: 9px; }

    .tabs-row { display: flex; gap: 8px; margin-bottom: 14px; }
    .tab-pill {
      flex: 1;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid var(--border);
      background: #FFFFFF;
      font-weight: 700;
      font-size: 13px;
      cursor: pointer;
    }
    .tab-pill.active { background: var(--navy); color: #FFFFFF; border-color: var(--navy); }

    .list-item {
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 14px;
      margin-bottom: 12px;
      background: #FFFFFF;
    }

    .item-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 8px;
      margin-bottom: 6px;
    }

    .item-title { font-weight: 800; font-size: 15px; color: var(--navy); }
    .item-meta { font-size: 12px; color: var(--muted); margin-bottom: 8px; }

    .badge {
      display: inline-block;
      padding: 4px 9px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 800;
    }

    .badge-open { background: var(--green-bg); color: var(--green); }
    .badge-transit { background: var(--amber-bg); color: var(--amber); }
    .badge-info { background: var(--blue-bg); color: var(--blue); }
    .badge-purple { background: var(--purple-bg); color: var(--purple); }
    .badge-teal { background: var(--teal-bg); color: var(--teal); }
    .badge-sec { background: var(--red-bg); color: var(--red); }

    .gps-live-card {
      background: #0F172A;
      color: #F8FAFC;
      border-radius: 14px;
      padding: 12px 14px;
      margin: 8px 0 10px;
    }

    .gps-coords {
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 12px;
      color: #38BDF8;
      margin: 4px 0 6px;
    }

    .map-link {
      display: inline-block;
      color: #FDBA74;
      font-size: 12px;
      font-weight: 700;
      text-decoration: underline;
    }

    .comm-box {
      background: #F8FAFC;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 10px;
      margin-top: 10px;
    }

    .msg-row {
      font-size: 12px;
      padding: 6px 8px;
      border-radius: 8px;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      margin-bottom: 6px;
    }

    .doc-chip {
      display: inline-block;
      background: #FEF3C7;
      color: #92400E;
      font-size: 11px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 6px;
      margin-top: 4px;
    }

    .setting-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      padding: 11px 12px;
      border: 1px solid var(--border);
      border-radius: 12px;
      background: #F8FAFC;
      margin-bottom: 10px;
    }

    .setting-label strong { display: block; font-size: 13px; color: var(--navy); }
    .setting-label span { display: block; font-size: 11px; color: var(--muted); }

    .alert-err { color: var(--red); font-size: 12px; font-weight: 700; margin-top: 8px; }
    .alert-ok { color: var(--green); font-size: 12px; font-weight: 700; margin-top: 8px; }
    .hidden { display: none !important; }

    .bottom-nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #FFFFFF;
      border-top: 1px solid var(--border);
      display: flex;
      justify-content: space-around;
      padding: 8px 6px calc(8px + env(safe-area-inset-bottom));
      z-index: 50;
    }

    .nav-btn {
      background: none;
      border: none;
      font-size: 11px;
      font-weight: 700;
      color: var(--muted);
      cursor: pointer;
      padding: 4px 6px;
    }

    .stats-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      margin-bottom: 14px;
    }

    .mini-stat {
      background: #F8FAFC;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 10px;
      text-align: center;
    }

    .mini-stat strong { display: block; font-size: 17px; color: var(--navy); }
    .mini-stat span { font-size: 11px; color: var(--muted); }
  </style>
</head>
<body>

  <header class="app-header">
    <div class="logo-wrap">
      <span class="logo-pill">USA</span>
      <span>TRUCKGO</span>
    </div>
    <div class="lang-group">
      <button id="btn-en" class="lang-btn active" onclick="setLanguage('en')">EN</button>
      <button id="btn-ur" class="lang-btn" onclick="setLanguage('ur')">اردو</button>
      <button id="btn-es" class="lang-btn" onclick="setLanguage('es')">ES</button>
    </div>
    <div id="header-user" class="user-chip">Home</div>
  </header>

  <main class="container">

    <!-- HOME SCREEN WITH TILES + ACTIVE LOADS ONLY + SETTINGS LIST -->
    <section id="home-view">
      <div class="banner banner-auth">
        <h1 id="t-home-title">TRUCKGO USA – Drivers, Active Loads, Truck Owner &amp; Courier</h1>
        <p id="t-home-sub">Fast onboarding for Courier, Truck Owner &amp; Driver with transparent US rate breakdown &amp; private trip GPS.</p>
      </div>

      <!-- 4 MAIN HOME BOXES -->
      <div class="card">
        <h2>Home Boxes (Tap to Open)</h2>
        <div class="home-tiles-grid">
          <button type="button" class="home-box-tile" data-box="drivers" onclick="openHomeBox('drivers')">
            <span class="tile-badge">DRIVER</span>
            <span class="tile-title">Drivers</span>
            <span class="tile-sub">Cargo, truck type, GPS &amp; chat</span>
          </button>
          <button type="button" class="home-box-tile" data-box="loads" onclick="openHomeBox('loads')">
            <span class="tile-badge">ACTIVE LOADS</span>
            <span class="tile-title">Loads</span>
            <span class="tile-sub">Active &amp; return loads with dates</span>
          </button>
          <button type="button" class="home-box-tile" data-box="owner" onclick="openHomeBox('owner')">
            <span class="tile-badge">PAYOUT &amp; FLEET</span>
            <span class="tile-title">Truck Owner</span>
            <span class="tile-sub">Salary payout, fleet &amp; chat</span>
          </button>
          <button type="button" class="home-box-tile" data-box="courier" onclick="openHomeBox('courier')">
            <span class="tile-badge">BOOK &amp; RETURN</span>
            <span class="tile-title">Courier</span>
            <span class="tile-sub">Post outbound/return &amp; chat</span>
          </button>
        </div>
      </div>

      <!-- ACTIVE LOADS BOARD ONLY + NEARBY DRIVER LOCATION FILTER -->
      <div id="home-loads-section" class="card">
        <h2>Active Loads Board &amp; Nearby Driver Loads</h2>
        <div class="field">
          <label>Driver Location / City (Filter Nearby Active Loads)</label>
          <div style="display:flex; gap:8px;">
            <input id="public-nearby-city" type="text" placeholder="e.g. Dallas, Miami, New York, Chicago..." oninput="renderPublicLoadBoard()" />
            <button type="button" class="btn btn-green btn-sm" onclick="useCurrentGpsForNearbyLoads()">Use My GPS</button>
          </div>
        </div>
        <div id="public-loads-board"></div>
      </div>

      <!-- ACCOUNT SIGN UP / SIGN IN CARD -->
      <div id="home-auth-card" class="card">
        <div class="tabs-row">
          <button id="tab-signup" class="tab-pill active" onclick="switchAuthMode('signup')">Quick Sign Up</button>
          <button id="tab-login" class="tab-pill" onclick="switchAuthMode('login')">Sign In</button>
        </div>

        <form id="auth-form">
          <div id="signup-fields">
            <label id="t-select-role" style="display:block; font-size:12px; font-weight:700; margin-bottom:6px;">1. Choose Role (Truck Owner, Driver, Courier)</label>
            <div class="role-grid-3">
              <button type="button" class="role-card active" data-role="owner" onclick="selectRole('owner', this)">
                <span class="role-tag">MC / DOT • PAYOUT</span>
                <span class="role-title">Truck Owner</span>
                <span class="role-desc">Gets payout &amp; pays salary</span>
              </button>
              <button type="button" class="role-card" data-role="driver" onclick="selectRole('driver', this)">
                <span class="role-tag">CDL / DL</span>
                <span class="role-title">Driver</span>
                <span class="role-desc">Pick loads &amp; chat</span>
              </button>
              <button type="button" class="role-card" data-role="courier" onclick="selectRole('courier', this)">
                <span class="role-tag">EIN / PRM</span>
                <span class="role-title">Courier</span>
                <span class="role-desc">Post loads &amp; chat</span>
              </button>
            </div>

            <div class="field">
              <label for="auth-name" id="t-lbl-name">Name or Company</label>
              <input id="auth-name" type="text" placeholder="e.g. Lone Star Freight LLC" />
            </div>

            <div class="doc-box">
              <div id="doc-section-title" style="font-size:12px; font-weight:800; margin-bottom:8px;">Truck Owner Documents (MC# / USDOT# &amp; Authority)</div>

              <div id="docs-owner">
                <div class="field">
                  <label>MC# or USDOT# (Owner Authority)</label>
                  <input id="owner-mc" type="text" placeholder="e.g. MC-849210 or DOT-3920114" />
                </div>
                <div class="field" style="margin-bottom:0;">
                  <label>Upload Operating Authority / Insurance Doc</label>
                  <input id="owner-doc-file" type="file" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
              </div>

              <div id="docs-driver" class="hidden">
                <div class="field">
                  <label>CDL / Driving License # (Driver Only)</label>
                  <input id="driver-cdl" type="text" placeholder="e.g. CDL-TX-7748291" />
                </div>
                <div class="field">
                  <label>Government ID / DOT Medical Card</label>
                  <input id="driver-gov-id" type="text" placeholder="e.g. TX State ID / Med Card" />
                </div>
                <div class="field" style="margin-bottom:0;">
                  <label>Upload Driving License &amp; Govt ID</label>
                  <input id="driver-doc-file" type="file" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
              </div>

              <div id="docs-courier" class="hidden">
                <div class="field">
                  <label>Business EIN # or Courier Permit # (Courier Only)</label>
                  <input id="courier-permit" type="text" placeholder="e.g. EIN-84-3920112 or PRM-4410" />
                </div>
                <div class="field" style="margin-bottom:0;">
                  <label>Upload Business Registration / Courier Permit</label>
                  <input id="courier-doc-file" type="file" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
              </div>
            </div>
          </div>

          <div class="field">
            <label for="auth-email" id="t-lbl-email">Email or Phone</label>
            <input id="auth-email" type="text" placeholder="name@company.com or +1 214 555 0199" />
          </div>

          <div class="field">
            <label for="auth-pass" id="t-lbl-pass">Password</label>
            <input id="auth-pass" type="password" placeholder="••••••" />
          </div>

          <button id="auth-submit-btn" type="submit" class="btn btn-orange">Enter TRUCKGO Now</button>
          <div id="auth-error" class="alert-err"></div>
        </form>
      </div>

      <!-- APP SETTINGS LIST (ALL SETTINGS + DISCREET WORKER SIGN-IN INSIDE) -->
      <div id="app-settings-list" class="card">
        <h2>App Settings List</h2>

        <div class="setting-row">
          <div class="setting-label">
            <strong>Language / زبان</strong>
            <span>Switch app interface between English, Urdu &amp; Spanish</span>
          </div>
          <div style="display:flex; gap:4px;">
            <button type="button" class="btn btn-outline btn-sm" onclick="setLanguage('en')">EN</button>
            <button type="button" class="btn btn-outline btn-sm" onclick="setLanguage('ur')">اردو</button>
            <button type="button" class="btn btn-outline btn-sm" onclick="setLanguage('es')">ES</button>
          </div>
        </div>

        <div class="setting-row">
          <div class="setting-label">
            <strong>Nearby GPS Location</strong>
            <span>Detect current location for nearby active loads</span>
          </div>
          <button type="button" class="btn btn-green btn-sm" onclick="useCurrentGpsForNearbyLoads()">Detect GPS</button>
        </div>

        <div class="setting-row">
          <div class="setting-label">
            <strong>Worker Sign-In (Office Staff Only)</strong>
            <span>Not shown on main home boxes; open worker login here</span>
          </div>
          <button type="button" class="btn btn-teal btn-sm" onclick="toggleStaffSignInBox()">Worker Sign-In</button>
        </div>

        <div id="staff-signin-box" class="doc-box hidden" style="margin-bottom:10px;">
          <div style="font-size:12px; font-weight:800; margin-bottom:8px;">Office Worker Sign-In</div>
          <div class="field">
            <label>Worker Name</label>
            <input id="staff-login-name" type="text" placeholder="e.g. Bilal Ahmed" />
          </div>
          <div class="field">
            <label>Worker Email or ID</label>
            <input id="staff-login-email" type="text" placeholder="staff@truckgo.us" />
          </div>
          <button type="button" class="btn btn-teal btn-sm" onclick="loginWorkerFromSettings()">Sign In as Worker</button>
        </div>

        <div class="setting-row" style="margin-bottom:0;">
          <div class="setting-label">
            <strong>Reset / Home View</strong>
            <span>Return to main TRUCKGO home screen</span>
          </div>
          <button type="button" class="btn btn-dark btn-sm" onclick="logoutUser()">Home</button>
        </div>
      </div>
    </section>

    <!-- 1. TRUCK OWNER PORTAL -->
    <section id="portal-owner" class="hidden">
      <div class="banner banner-owner">
        <h1>Truck Owner – Payout Bank, Fleet &amp; Driver Control</h1>
        <p>Payout goes to Truck Owner after platform commission so you pay driver salaries; trip GPS stays between you, assigned driver &amp; courier.</p>
      </div>

      <div class="card">
        <h2>Truck Owner Payout Bank / Account (Receives Payout to Pay Salaries)</h2>
        <div class="field">
          <label>Owner Bank Routing / Account or Stripe Payout ID</label>
          <input id="owner-bank-account" type="text" placeholder="e.g. Chase •••• 8821 or Stripe Express" oninput="saveBankAccounts()" />
        </div>
        <div id="owner-bank-status" class="alert-ok">Owner payout bank ready for delivery payouts</div>
      </div>

      <div class="card">
        <h2>Quick Add Truck</h2>
        <form id="truck-form">
          <div class="field">
            <label>Truck Unit &amp; Model</label>
            <input id="truck-unit" type="text" placeholder="e.g. Unit #112 – Freightliner Cascadia" required />
          </div>
          <div class="field">
            <label>Equipment Type</label>
            <select id="truck-equip">
              <option value="53ft Dry Van">53ft Dry Van</option>
              <option value="53ft Reefer">53ft Reefer</option>
              <option value="48ft Flatbed">48ft Flatbed</option>
              <option value="Step Deck">Step Deck</option>
              <option value="26ft Box Truck">26ft Box Truck</option>
            </select>
          </div>
          <div class="field">
            <label>Driver Name</label>
            <input id="truck-driver" type="text" placeholder="e.g. Carlos Mendez" required />
          </div>
          <button type="submit" class="btn btn-orange">+ Add Truck</button>
        </form>
      </div>

      <div class="card">
        <h2>My Fleet (<span id="fleet-count">0</span>)</h2>
        <div id="fleet-list"></div>
      </div>

      <div class="card">
        <h2>Active Load Watch, 3-Way Chat, Driver Control &amp; Assigned Driver GPS</h2>
        <div id="owner-loads-list"></div>
      </div>

      <div class="card">
        <h2>My Delivered Loads (Private to You, Driver &amp; Courier)</h2>
        <div id="owner-delivered-list"></div>
      </div>
    </section>

    <!-- 2. DRIVER PORTAL -->
    <section id="portal-driver" class="hidden">
      <div class="banner banner-driver">
        <h1>Driver – Active &amp; Nearby Loads, Cargo/Truck Specs &amp; 3-Way Chat</h1>
        <p>Your trip location is shared only on your assigned load with that load's owner &amp; courier — not publicly.</p>
      </div>

      <div class="card">
        <h2>Nearby Active Loads Around My Location</h2>
        <div class="field">
          <label>My Current City / Location</label>
          <div style="display:flex; gap:8px;">
            <input id="driver-nearby-city" type="text" placeholder="e.g. New York, Dallas, Miami..." oninput="renderApp()" />
            <button type="button" class="btn btn-green btn-sm" onclick="useCurrentGpsForDriver()">Use My GPS</button>
          </div>
        </div>
      </div>

      <div class="card">
        <h2>Live GPS (Only For Your Assigned Load — Shared Only With That Load's Owner &amp; Courier)</h2>
        <div class="gps-live-card">
          <div style="font-size:11px; color:#86EFAC;">ASSIGNED ORDER PARTIES ONLY (NOT PUBLIC / NOT OTHER DRIVERS)</div>
          <div id="gps-status-text" style="font-weight:800; font-size:15px; margin-top:2px;">GPS Off (Standby)</div>
          <div id="gps-coords-display" class="gps-coords">Lat: 32.77670, Lng: -96.79700</div>
          <a id="gps-map-link" class="map-link" href="https://maps.google.com/?q=32.77670,-96.79700" target="_blank" rel="noopener">
            Open Last / Live Location on Google Maps &rarr;
          </a>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button type="button" class="btn btn-green btn-sm" onclick="startLiveGPS()">Start GPS Sharing</button>
          <button type="button" class="btn btn-red btn-sm" onclick="stopLiveGPS()">Stop GPS Sharing</button>
        </div>
      </div>

      <div class="card">
        <h2>Active Loads Available (Check Cargo, Truck Type &amp; Company)</h2>
        <div id="driver-loads-list"></div>
      </div>

      <div class="card">
        <h2>My Delivered Loads (Private to You, Owner &amp; Courier)</h2>
        <div id="driver-delivered-list"></div>
      </div>
    </section>

    <!-- 3. COURIER PORTAL -->
    <section id="portal-courier" class="hidden">
      <div class="banner banner-courier">
        <h1>Courier – Company, Cargo, Return Load &amp; Both-Way US Auto Fare</h1>
        <p>Commission (<span id="courier-banner-comm">10</span>%) is deducted from total rate; remaining payout goes to Truck Owner to pay driver salary.</p>
      </div>

      <div class="card">
        <h2>Courier Bank / Billing Account</h2>
        <div class="field">
          <label>Courier Bank Account / ACH / Business Card</label>
          <input id="courier-bank-account" type="text" placeholder="e.g. Business Bank •••• 5519 / ACH Routing" oninput="saveBankAccounts()" />
        </div>
        <div id="courier-bank-status" class="alert-ok">Courier bank account ready</div>
      </div>

      <div class="card">
        <h2>Fast US Route Presets</h2>
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px;">
          <button type="button" class="btn btn-outline btn-sm" onclick="applyRoutePreset('125 Broadway, New York, NY', '701 Brickell Ave, Miami, FL', 18500)">New York → Miami</button>
          <button type="button" class="btn btn-outline btn-sm" onclick="applyRoutePreset('Houston, TX', 'Dallas, TX', 14000)">Houston → Dallas</button>
          <button type="button" class="btn btn-outline btn-sm" onclick="applyRoutePreset('Chicago, IL', 'Atlanta, GA', 24000)">Chicago → Atlanta</button>
        </div>

        <form id="courier-form">
          <div class="field">
            <label>Order Company Name (Shown to Driver &amp; Owner)</label>
            <input id="load-company-name" type="text" placeholder="e.g. SwiftBox Courier USA" oninput="calculateAutoRate()" />
          </div>
          <div class="field">
            <label>What Is the Load / Cargo? (Shown to Driver)</label>
            <input id="load-cargo-desc" type="text" placeholder="e.g. Palletized Retail Electronics & Dry Goods" />
          </div>
          <div class="field">
            <label>Load Goes On Date (Pickup Date)</label>
            <input id="load-pickup-date" type="date" required />
          </div>
          <div class="field">
            <label>Pickup City / Street Address (Outbound Start)</label>
            <input id="load-origin" type="text" placeholder="e.g. New York, NY or 125 Broadway, New York, NY" oninput="calculateAutoRate()" required />
          </div>
          <div class="field">
            <label>Drop-off City / Street Address (Outbound End)</label>
            <input id="load-dest" type="text" placeholder="e.g. Miami, FL or 701 Brickell Ave, Miami, FL" oninput="calculateAutoRate()" required />
          </div>
          <div class="field">
            <label>Include Return Order? (Auto-Calculates Both Ways)</label>
            <select id="load-include-return" onchange="calculateAutoRate()">
              <option value="yes">Yes — Include Return Order &amp; Auto Fare Both Ways</option>
              <option value="no">No — One-Way Outbound Only</option>
            </select>
          </div>
          <div id="return-details-fields" class="doc-box">
            <div style="font-size:12px; font-weight:800; margin-bottom:8px;">Return Order Details (Both-Way Auto Fare)</div>
            <div class="field">
              <label>Return Date</label>
              <input id="load-return-date" type="date" />
            </div>
            <div class="field">
              <label>Return Pickup Location</label>
              <input id="load-return-origin" type="text" placeholder="e.g. Miami, FL (defaults to Drop-off)" oninput="calculateAutoRate()" />
            </div>
            <div class="field">
              <label>Return Drop-off Location</label>
              <input id="load-return-dest" type="text" placeholder="e.g. New York, NY (defaults to Pickup)" oninput="calculateAutoRate()" />
            </div>
            <div class="field" style="margin-bottom:0;">
              <label>Return Cargo Weight (lbs)</label>
              <input id="load-return-weight" type="number" min="0" step="50" value="14000" oninput="calculateAutoRate()" />
            </div>
          </div>
          <div class="field">
            <label>Outbound Miles (Auto-Calculated US Distance — Edit if needed)</label>
            <input id="load-miles" type="number" min="5" value="1280" oninput="calculateAutoRate()" required />
          </div>
          <div class="field">
            <label>Outbound Cargo Weight (lbs)</label>
            <input id="load-weight" type="number" min="50" step="50" value="18000" oninput="calculateAutoRate()" required />
          </div>
          <div class="field">
            <label>Required Truck / Equipment Type (Shown to Driver)</label>
            <select id="load-type" onchange="calculateAutoRate()">
              <option value="Express Courier Van">Express Courier Van</option>
              <option value="26ft Box Truck">26ft Box Truck</option>
              <option value="53ft Dry Van">53ft Dry Van</option>
              <option value="53ft Reefer">53ft Reefer</option>
              <option value="48ft Flatbed">48ft Flatbed</option>
            </select>
          </div>

          <div class="pay-box">
            <div style="font-size:12px; font-weight:800; color:#0F172A; margin-bottom:8px;">
              Stripe &amp; US Payment Method (Held Until Delivery)
            </div>
            <div class="pay-methods-grid">
              <button type="button" class="pay-chip-btn active" data-pay="Stripe Card (Visa/MC/Amex)" onclick="selectPayMethod(this)">Stripe Card</button>
              <button type="button" class="pay-chip-btn" data-pay="Stripe Apple Pay" onclick="selectPayMethod(this)">Apple Pay</button>
              <button type="button" class="pay-chip-btn" data-pay="Stripe Google Pay" onclick="selectPayMethod(this)">Google Pay</button>
              <button type="button" class="pay-chip-btn" data-pay="Stripe ACH Bank Transfer" onclick="selectPayMethod(this)">ACH Bank</button>
              <button type="button" class="pay-chip-btn" data-pay="PayPal / Venmo" onclick="selectPayMethod(this)">PayPal / Venmo</button>
              <button type="button" class="pay-chip-btn" data-pay="Cash App Pay" onclick="selectPayMethod(this)">Cash App Pay</button>
            </div>
            <div id="pay-method-hint" style="font-size:11px; color:#475569;">
              Selected: Stripe Card (Visa/MC/Amex) • Held until delivery, instant payout to Truck Owner upon completion
            </div>
          </div>

          <div class="rate-summary">
            <div class="rate-line"><span>Total Distance (Outbound + Return):</span><strong id="auto-miles-label">2,560 miles</strong></div>
            <div class="rate-line"><span>Outbound + Return Fare Breakdown:</span><strong id="legs-fare-detail">$4,408 out + $4,040 return</strong></div>
            <div class="rate-line"><span>US Auto Total Rent:</span><strong id="auto-fare-display">$8,448</strong></div>
            <div class="rate-line"><span>Platform Commission (<span id="comm-rate-label">10</span>% from Total Rate):</span><strong id="comm-amount-display">$845</strong></div>
            <div class="rate-line rate-total"><span>Truck Owner Payout (After Commission):</span><span id="net-payout-display">$7,603</span></div>
          </div>

          <div class="field">
            <label>Custom Rent Override ($ Optional — Only If Changing Auto Rate)</label>
            <input id="load-price" type="number" placeholder="Leave blank to use auto rent above" oninput="updateCustomRatePreview()" />
          </div>

          <button type="submit" class="btn btn-blue">Post Active Load (Payment Held Until Delivery)</button>
        </form>
      </div>

      <div class="card">
        <h2>My Active Loads, Delivery Payout Release, 3-Way Chat &amp; Assigned Driver GPS</h2>
        <div id="courier-loads-list"></div>
      </div>

      <div class="card">
        <h2>My Delivered Loads (Private to You, Driver &amp; Owner)</h2>
        <div id="courier-delivered-list"></div>
      </div>
    </section>

    <!-- 4. STAFF / WORKER PORTAL -->
    <section id="portal-staff" class="hidden">
      <div class="banner banner-staff">
        <h1>Office / Dispatch Worker – Active Loads &amp; Verified Help Lookup</h1>
        <p>Delivered records stay private; verify Load ID + claimant identity during help or complaint requests.</p>
      </div>

      <div class="card">
        <h2>Help / Complaint Record Lookup (Requires Load ID + Party Identity)</h2>
        <div class="field">
          <label>Load ID / Number</label>
          <input id="staff-lookup-load-id" type="text" placeholder="e.g. 981" />
        </div>
        <div class="field">
          <label>Identity Verification (Driver Name, Truck Owner Name, Courier/Company or Email)</label>
          <input id="staff-lookup-identity" type="text" placeholder="e.g. Marcus Johnson or Lone Star Trucking" />
        </div>
        <button type="button" class="btn btn-teal btn-sm" onclick="verifyAndShowLookup('staff')">Verify &amp; Open Load Record</button>
        <div id="staff-lookup-result" style="margin-top:10px;"></div>
      </div>

      <div class="card">
        <h2>Worker Dispatch Note (Logged Under Your Name)</h2>
        <div class="field">
          <label>Dispatch / Support Update</label>
          <input id="staff-note-input" type="text" placeholder="e.g. Assigned pickup window & confirmed driver" />
        </div>
        <button type="button" class="btn btn-teal btn-sm" onclick="logStaffAction()">Save Dispatch Note</button>
      </div>

      <div class="card">
        <h2>Active Loads &amp; 3-Way Chat Watch</h2>
        <div id="staff-loads-list"></div>
      </div>

      <div class="card">
        <h2>Audit Trail (Every Action Recorded)</h2>
        <div id="staff-audit-logs"></div>
      </div>
    </section>

    <!-- 5. PRIVATE ADMIN PORTAL -->
    <section id="portal-admin" class="hidden">
      <div class="banner banner-admin">
        <h1>Private Admin – Your Commission, Bank Payouts &amp; Verified Lookup</h1>
        <p>Hidden from public users; open anytime via ?admin=true or admin@truckgo.us.</p>
      </div>

      <div class="card">
        <h2>Complaint / Help Record Lookup (Requires Load ID + Party Identity)</h2>
        <div class="field">
          <label>Load ID / Number</label>
          <input id="admin-lookup-load-id" type="text" placeholder="e.g. 981" />
        </div>
        <div class="field">
          <label>Identity Verification (Driver Name, Truck Owner Name, Courier/Company or Email)</label>
          <input id="admin-lookup-identity" type="text" placeholder="e.g. Marcus Johnson or Lone Star Trucking" />
        </div>
        <button type="button" class="btn btn-purple btn-sm" onclick="verifyAndShowLookup('admin')">Verify &amp; Open Full Load Record</button>
        <div id="admin-lookup-result" style="margin-top:10px;"></div>
      </div>

      <div class="card">
        <h2>Your Platform Payout Bank &amp; Withdraw Commission</h2>
        <div class="field">
          <label>Your Bank Account / Routing or Stripe Account</label>
          <input id="admin-payout-bank" type="text" placeholder="e.g. Business Bank •••• 9012 / Stripe Payouts" oninput="saveAdminPayoutBank()" />
        </div>
        <div class="rate-summary">
          <div class="rate-line"><span>Total Earned Commission (From Total Load Rates):</span><strong id="adm-earned-box">$0</strong></div>
          <div class="rate-line"><span>Already Withdrawn to Bank:</span><strong id="adm-withdrawn-box">$0</strong></div>
          <div class="rate-line rate-total"><span>Available to Withdraw:</span><span id="adm-available-box">$0</span></div>
        </div>
        <button type="button" class="btn btn-green" onclick="withdrawAdminCommission()">Withdraw Available Commission to Your Bank</button>
        <div id="admin-withdraw-msg" class="alert-ok"></div>
      </div>

      <div class="card">
        <h2>Your Platform Commission (%) &amp; Stripe Key</h2>
        <div class="field">
          <label>Stripe Publishable Key (pk_test_... or pk_live_...)</label>
          <input id="admin-stripe-pk" type="text" placeholder="pk_test_your_publishable_key_here" />
        </div>
        <div class="field">
          <label>Stripe Checkout Endpoint URL (Optional)</label>
          <input id="admin-stripe-endpoint" type="text" placeholder="https://your-backend.example.com/create-checkout-session" />
        </div>
        <div class="field">
          <label>TRUCKGO Commission (% Deducted From Total Rate)</label>
          <input id="admin-commission-input" type="number" min="0" max="50" step="0.5" value="10" />
        </div>
        <button type="button" class="btn btn-purple" onclick="saveAdminConfig()">Save Settings</button>
        <div id="admin-save-msg" class="alert-ok"></div>
      </div>

      <div class="stats-row">
        <div class="mini-stat"><strong id="adm-users">0</strong><span>Users</span></div>
        <div class="mini-stat"><strong id="adm-commission-total">$0</strong><span>Your Commission</span></div>
        <div class="mini-stat"><strong id="adm-instant-paid">$0</strong><span>Paid to Owners</span></div>
      </div>

      <div class="card">
        <h2>Accounts &amp; Role Documents</h2>
        <div id="admin-users-list"></div>
      </div>

      <div class="card">
        <h2>Activity, Worker Actions &amp; Payout Log</h2>
        <div id="admin-security-logs"></div>
      </div>
    </section>

  </main>

  <nav id="bottom-nav" class="bottom-nav hidden">
    <button class="nav-btn" onclick="logoutUser()">Home</button>
    <button class="nav-btn" onclick="switchRoleQuick('owner')">Owner</button>
    <button class="nav-btn" onclick="switchRoleQuick('driver')">Driver</button>
    <button class="nav-btn" onclick="switchRoleQuick('courier')">Courier</button>
    <button class="nav-btn" onclick="logoutUser()">Exit</button>
  </nav>

  <script>
    const SUPABASE_URL = "https://bqrnznmxlctzxcrkxcpd.supabase.co";
    const SUPABASE_ANON_KEY = "Sb_publishable_kaNhCrmaMyq4fkDWTH6HkQ_v-ujcd6C";
    const sb = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

    let stripePublishableKey = localStorage.getItem("tg_stripe_pk") || "";
    let stripeEndpoint = localStorage.getItem("tg_stripe_endpoint") || "";
    let stripeInstance = null;

    function initStripe() {
      if (window.Stripe && stripePublishableKey && stripePublishableKey.startsWith("pk_")) {
        try {
          stripeInstance = window.Stripe(stripePublishableKey);
        } catch (_err) {
          stripeInstance = null;
        }
      }
    }

    let lang = localStorage.getItem("tg_lang") || "en";
    let authMode = "signup";
    let selectedRole = "owner";
    let selectedPayMethod = "Stripe Card (Visa/MC/Amex)";
    let commissionPercent = Number(localStorage.getItem("tg_commission_pct") || "10");
    let adminWithdrawnTotal = Number(localStorage.getItem("tg_admin_withdrawn") || "0");
    let adminPayoutBank = localStorage.getItem("tg_admin_bank") || "";
    let currentUser = JSON.parse(localStorage.getItem("tg_current_user_v6") || "null");

    let ownerBankAccount = localStorage.getItem("tg_owner_bank") || "";
    let courierBankAccount = localStorage.getItem("tg_courier_bank") || "";
    let gpsWatchId = null;

    function getDefaultPickupDate() {
      const d = new Date(Date.now() + 7 * 86400000);
      return d.toISOString().split("T")[0];
    }

    function getDefaultReturnDate() {
      const d = new Date(Date.now() + 14 * 86400000);
      return d.toISOString().split("T")[0];
    }

    let securityLogs = JSON.parse(localStorage.getItem("tg_sec_logs_v6") || "null") || [
      "TRUCKGO USA active: fast onboarding for Courier, Truck Owner & Driver with clear rate & private trip GPS"
    ];

    let users = JSON.parse(localStorage.getItem("tg_users_v6") || "null") || [
      { name: "Lone Star Trucking", email: "owner@truckgo.us", role: "owner", docInfo: "MC-849210 • Operating Authority" },
      { name: "Marcus Johnson", email: "driver@truckgo.us", role: "driver", docInfo: "CDL-TX-7748291 • Driving License & ID" },
      { name: "SwiftBox Courier USA", email: "courier@truckgo.us", role: "courier", docInfo: "EIN-84-3920112 • Courier Permit" },
      { name: "Ali Raza (Dispatch)", email: "staff@truckgo.us", role: "staff", docInfo: "Office Worker (Dispatch & Loads)" }
    ];

    let trucks = JSON.parse(localStorage.getItem("tg_trucks_v6") || "null") || [
      { id: 1, unit: "Unit #101 – Kenworth T680", equip: "53ft Dry Van", driver: "Marcus Johnson", ownerName: "Lone Star Trucking", status: "Ready / Active" }
    ];

    let loads = JSON.parse(localStorage.getItem("tg_loads_v6") || "null") || [
      {
        id: 981,
        companyName: "SwiftBox Courier USA",
        cargoDesc: "Palletized Retail Cartons & Return Pallets",
        pickupDate: getDefaultPickupDate(),
        returnDate: getDefaultReturnDate(),
        hasReturn: true,
        origin: "New York, NY",
        dest: "Miami, FL",
        returnOrigin: "Miami, FL",
        returnDest: "New York, NY",
        miles: 1280,
        totalMiles: 2560,
        weight: 18000,
        returnWeight: 14000,
        type: "53ft Dry Van",
        price: 8448,
        payMethod: "Stripe Apple Pay",
        status: "Open",
        payoutStatus: "HELD UNTIL DELIVERY",
        driver: "Available for Driver",
        courierName: "SwiftBox Courier USA",
        truckOwner: "Lone Star Trucking",
        acceptedAt: 0,
        pickedUp: false,
        lat: 40.7128,
        lng: -74.0060,
        gpsActive: false,
        gpsUpdated: "Off (Trip Not Started)",
        messages: [
          { sender: "Courier", text: "Outbound + Return included. Only assigned parties share trip location & load chat here.", docName: "" }
        ]
      }
    ];

    const CITY_COORDS = {
      "new york": [40.7128, -74.0060],
      "nyc": [40.7128, -74.0060],
      "miami": [25.7617, -80.1918],
      "florida": [27.9944, -81.7603],
      "dallas": [32.7767, -96.7970],
      "houston": [29.7604, -95.3698],
      "atlanta": [33.7490, -84.3880],
      "chicago": [41.8781, -87.6298],
      "los angeles": [34.0522, -118.2437],
      "nashville": [36.1627, -86.7816],
      "charlotte": [35.2271, -80.8431],
      "orlando": [28.5383, -81.3792]
    };

    function haversineMiles(lat1, lon1, lat2, lon2) {
      const toRad = (d) => (d * Math.PI) / 180;
      const R = 3958.8;
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return Math.max(15, Math.round(R * c * 1.18));
    }

    function lookupCoordsFromAddress(text) {
      const low = String(text || "").toLowerCase();
      for (const key of Object.keys(CITY_COORDS)) {
        if (low.includes(key)) return CITY_COORDS[key];
      }
      if (!low.trim()) return null;
      let hash = 0;
      for (let i = 0; i < low.length; i++) hash = (hash * 31 + low.charCodeAt(i)) % 100000;
      const lat = 26 + (hash % 1800) / 100;
      const lng = -118 + ((hash * 7) % 4500) / 100;
      return [lat, lng];
    }

    const i18n = {
      en: {
        homeTitle: "TRUCKGO USA – Drivers, Active Loads, Truck Owner & Courier",
        homeSub: "Fast onboarding for Courier, Truck Owner & Driver with transparent US rate breakdown & private trip GPS.",
        signup: "Quick Sign Up",
        login: "Sign In",
        selectRole: "1. Choose Role (Truck Owner, Driver, Courier)",
        lblName: "Name or Company",
        lblEmail: "Email or Phone",
        lblPass: "Password",
        submitSignup: "Enter TRUCKGO Now",
        submitLogin: "Sign In Fast"
      },
      ur: {
        homeTitle: "TRUCKGO USA – ڈرائیورز، ایکٹیو لوڈز، ٹرک مالک اور کورئیر",
        homeSub: "کورئیر، مالک اور ڈرائیور کے لیے تیز آن بورڈنگ، واضح کرایہ بریک ڈاؤن اور پرائیویٹ جی پی ایس۔",
        signup: "فوری سائن اَپ",
        login: "سائن اِن",
        selectRole: "1. اپنا رول چنیں (ٹرک مالک، ڈرائیور، کورئیر)",
        lblName: "نام یا کمپنی کا نام",
        lblEmail: "ای میل یا فون نمبر",
        lblPass: "پاس ورڈ",
        submitSignup: "فوری داخل ہوں",
        submitLogin: "تیز سائن اِن"
      },
      es: {
        homeTitle: "TRUCKGO USA – Conductores, Cargas Activas, Dueño y Courier",
        homeSub: "Registro rápido para Courier, Dueño y Conductor con desglose claro en EE. UU. y GPS privado.",
        signup: "Registro Rápido",
        login: "Iniciar Sesión",
        selectRole: "1. Elegir Rol",
        lblName: "Nombre o Empresa",
        lblEmail: "Correo o Teléfono",
        lblPass: "Contraseña",
        submitSignup: "Entrar a TRUCKGO",
        submitLogin: "Entrar Rápido"
      }
    };

    function escapeHtml(v) {
      return String(v || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    function addSecurityLog(msg) {
      const stamp = new Date().toLocaleTimeString();
      securityLogs = [`[${stamp}] ${msg}`, ...securityLogs.slice(0, 39)];
      localStorage.setItem("tg_sec_logs_v6", JSON.stringify(securityLogs));
    }

    function setLanguage(newLang) {
      lang = newLang;
      localStorage.setItem("tg_lang", lang);
      document.body.classList.toggle("rtl", lang === "ur");
      document.getElementById("btn-en").classList.toggle("active", lang === "en");
      document.getElementById("btn-ur").classList.toggle("active", lang === "ur");
      document.getElementById("btn-es").classList.toggle("active", lang === "es");

      const t = i18n[lang];
      document.getElementById("t-home-title").textContent = t.homeTitle;
      document.getElementById("t-home-sub").textContent = t.homeSub;
      document.getElementById("tab-signup").textContent = t.signup;
      document.getElementById("tab-login").textContent = t.login;
      document.getElementById("t-select-role").textContent = t.selectRole;
      document.getElementById("t-lbl-name").textContent = t.lblName;
      document.getElementById("t-lbl-email").textContent = t.lblEmail;
      document.getElementById("t-lbl-pass").textContent = t.lblPass;
      document.getElementById("auth-submit-btn").textContent = authMode === "signup" ? t.submitSignup : t.submitLogin;
    }

    function saveState() {
      localStorage.setItem("tg_users_v6", JSON.stringify(users));
      localStorage.setItem("tg_trucks_v6", JSON.stringify(trucks));
      localStorage.setItem("tg_loads_v6", JSON.stringify(loads));
      localStorage.setItem("tg_commission_pct", String(commissionPercent));
      localStorage.setItem("tg_admin_withdrawn", String(adminWithdrawnTotal));
      localStorage.setItem("tg_admin_bank", adminPayoutBank);
      localStorage.setItem("tg_stripe_pk", stripePublishableKey);
      localStorage.setItem("tg_stripe_endpoint", stripeEndpoint);
      localStorage.setItem("tg_owner_bank", ownerBankAccount);
      localStorage.setItem("tg_courier_bank", courierBankAccount);
      if (currentUser) localStorage.setItem("tg_current_user_v6", JSON.stringify(currentUser));
      else localStorage.removeItem("tg_current_user_v6");
    }

    function openHomeBox(boxName) {
      if (boxName === "loads") {
        document.getElementById("home-loads-section")?.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (boxName === "drivers") quickLogin("driver");
      else if (boxName === "owner") quickLogin("owner");
      else if (boxName === "courier") quickLogin("courier");
    }

    function toggleStaffSignInBox() {
      document.getElementById("staff-signin-box")?.classList.toggle("hidden");
    }

    function loginWorkerFromSettings() {
      const wName = (document.getElementById("staff-login-name")?.value.trim() || "Office Worker").slice(0, 60);
      const wEmail = (document.getElementById("staff-login-email")?.value.trim() || "staff@truckgo.us").slice(0, 80);
      currentUser = { name: wName, email: wEmail, role: "staff", docInfo: "Office Staff (Settings Login)" };
      addSecurityLog(`Worker signed in via App Settings: ${wName}`);
      saveState();
      renderApp();
    }

    function verifyAndShowLookup(portalPrefix) {
      const idVal = (document.getElementById(`${portalPrefix}-lookup-load-id`)?.value || "").trim().replace(/^#/, "");
      const identVal = (document.getElementById(`${portalPrefix}-lookup-identity`)?.value || "").trim().toLowerCase();
      const outEl = document.getElementById(`${portalPrefix}-lookup-result`);
      if (!outEl) return;

      if (!idVal || !identVal) {
        outEl.innerHTML = `<div class="alert-err">Please enter both Load ID/Number and claimant identity (Driver, Truck Owner, Courier/Company, or Email).</div>`;
        return;
      }

      const foundLoad = loads.find((l) => String(l.id) === idVal);
      if (!foundLoad) {
        outEl.innerHTML = `<div class="alert-err">No load found with ID #${escapeHtml(idVal)}.</div>`;
        return;
      }

      const matchedUser = users.find(
        (u) =>
          String(u.name || "").toLowerCase().includes(identVal) ||
          String(u.email || "").toLowerCase().includes(identVal)
      );

      const matchesParty =
        String(foundLoad.driver || "").toLowerCase().includes(identVal) ||
        String(foundLoad.truckOwner || "").toLowerCase().includes(identVal) ||
        String(foundLoad.courierName || "").toLowerCase().includes(identVal) ||
        String(foundLoad.companyName || "").toLowerCase().includes(identVal) ||
        Boolean(matchedUser);

      if (!matchesParty) {
        outEl.innerHTML = `<div class="alert-err">Identity not verified for Load #${escapeHtml(idVal)}. Confirm driver, truck owner, courier/company name, or account email.</div>`;
        return;
      }

      const comm = Math.round((foundLoad.price * commissionPercent) / 100);
      const net = foundLoad.price - comm;
      const chatSummary = (foundLoad.messages || [])
        .map((m) => `<div class="msg-row"><strong>${escapeHtml(m.sender)}:</strong> ${escapeHtml(m.text)}${m.docName ? ` • File: ${escapeHtml(m.docName)}` : ""}</div>`)
        .join("");

      addSecurityLog(`${portalPrefix.toUpperCase()} verified help/complaint lookup for Load #${foundLoad.id} by "${identVal}"`);
      saveState();

      outEl.innerHTML = `
        <div class="list-item" style="background:#F8FAFC;">
          <div class="item-top">
            <div class="item-title">Load #${escapeHtml(foundLoad.id)}: ${escapeHtml(foundLoad.origin)} &rarr; ${escapeHtml(foundLoad.dest)}</div>
            <span class="badge badge-open">${escapeHtml(foundLoad.status)}</span>
          </div>
          <div class="item-meta">
            Company: <strong>${escapeHtml(foundLoad.companyName || foundLoad.courierName || "Courier Company")}</strong> • Cargo: <strong>${escapeHtml(foundLoad.cargoDesc || foundLoad.type)}</strong> • Truck: <strong>${escapeHtml(foundLoad.type)}</strong><br/>
            Goes on: <strong>${escapeHtml(foundLoad.pickupDate || "Scheduled")}</strong>${foundLoad.hasReturn ? ` • Return: <strong>${escapeHtml(foundLoad.returnDate || "Scheduled")}</strong> (${escapeHtml(foundLoad.returnOrigin || foundLoad.dest)} &rarr; ${escapeHtml(foundLoad.returnDest || foundLoad.origin)})` : ""}<br/>
            Driver: <strong>${escapeHtml(foundLoad.driver)}</strong> • Owner: <strong>${escapeHtml(foundLoad.truckOwner || "Owner")}</strong><br/>
            Total: $${foundLoad.price.toLocaleString()} • Commission (${commissionPercent}%): $${comm.toLocaleString()} • Owner Payout: $${net.toLocaleString()}
          </div>
          ${chatSummary || `<div class="item-meta">No messages on this load.</div>`}
        </div>
      `;
    }

    function saveAdminPayoutBank() {
      const el = document.getElementById("admin-payout-bank");
      if (el) adminPayoutBank = el.value.trim();
      saveState();
    }

    function withdrawAdminCommission() {
      const earned = loads.reduce((sum, l) => sum + Math.round((l.price * commissionPercent) / 100), 0);
      const available = Math.max(0, earned - adminWithdrawnTotal);
      if (available <= 0) {
        const msg = document.getElementById("admin-withdraw-msg");
        if (msg) msg.textContent = "No new commission balance available to withdraw right now.";
        return;
      }
      adminWithdrawnTotal += available;
      const bankLabel = adminPayoutBank || "Admin Bank / Stripe Account";
      addSecurityLog(`ADMIN PAYOUT: Withdrew $${available.toLocaleString()} commission to ${bankLabel}`);
      saveState();
      renderApp();
      const msg = document.getElementById("admin-withdraw-msg");
      if (msg) msg.textContent = `✓ Recorded payout of $${available.toLocaleString()} to ${bankLabel}`;
    }

    function logStaffAction() {
      const inp = document.getElementById("staff-note-input");
      const txt = inp ? inp.value.trim() : "";
      if (!txt) return;
      const workerName = currentUser ? currentUser.name : "Staff Worker";
      addSecurityLog(`STAFF (${workerName}): ${txt}`);
      if (inp) inp.value = "";
      renderApp();
    }

    function saveBankAccounts() {
      const oEl = document.getElementById("owner-bank-account");
      const cEl = document.getElementById("courier-bank-account");
      if (oEl) ownerBankAccount = oEl.value.trim();
      if (cEl) courierBankAccount = cEl.value.trim();
      saveState();
      const oStatus = document.getElementById("owner-bank-status");
      const cStatus = document.getElementById("courier-bank-status");
      if (oStatus) {
        oStatus.textContent = ownerBankAccount
          ? `Owner payout bank saved: ${ownerBankAccount}`
          : "Owner payout bank ready (receives delivery payouts to pay salaries)";
      }
      if (cStatus) {
        cStatus.textContent = courierBankAccount
          ? `Courier bank/billing saved: ${courierBankAccount}`
          : "Courier bank account ready (add bank/ACH/card details anytime)";
      }
    }

    function switchAuthMode(mode) {
      authMode = mode;
      document.getElementById("tab-signup").classList.toggle("active", mode === "signup");
      document.getElementById("tab-login").classList.toggle("active", mode === "login");
      document.getElementById("signup-fields").classList.toggle("hidden", mode === "login");
      setLanguage(lang);
    }

    function selectRole(role, btn) {
      selectedRole = role;
      document.querySelectorAll(".role-card").forEach((el) => el.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("docs-owner").classList.toggle("hidden", role !== "owner");
      document.getElementById("docs-driver").classList.toggle("hidden", role !== "driver");
      document.getElementById("docs-courier").classList.toggle("hidden", role !== "courier");

      const titles = {
        owner: "Truck Owner Documents (MC# / USDOT# & Authority)",
        driver: "Driver Documents (CDL / Driving License & Govt ID)",
        courier: "Courier Documents (Business EIN / Permit)"
      };
      document.getElementById("doc-section-title").textContent = titles[role] || "Role Documents";
    }

    function getRoleDocSummary() {
      if (selectedRole === "owner") {
        const mc = (document.getElementById("owner-mc").value.trim() || "Owner Authority").toUpperCase();
        const f = document.getElementById("owner-doc-file").files[0]?.name || "Authority Doc";
        return `${mc} • ${f}`;
      }
      if (selectedRole === "driver") {
        const cdl = (document.getElementById("driver-cdl").value.trim() || "Driver CDL").toUpperCase();
        const gov = document.getElementById("driver-gov-id").value.trim() || "Govt ID";
        const f = document.getElementById("driver-doc-file").files[0]?.name || "License Doc";
        return `${cdl} • ${gov} • ${f}`;
      }
      const p = (document.getElementById("courier-permit").value.trim() || "Courier Permit").toUpperCase();
      const f = document.getElementById("courier-doc-file").files[0]?.name || "Permit Doc";
      return `${p} • ${f}`;
    }

    document.getElementById("auth-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const contact = (document.getElementById("auth-email").value.trim() || `${selectedRole}@truckgo.us`);
      const name = (document.getElementById("auth-name").value.trim() || contact.split("@")[0] || "User").slice(0, 60);

      if (contact.toLowerCase().includes("admin@truckgo.us")) {
        currentUser = { name: "TRUCKGO Admin", email: contact, role: "admin", docInfo: "PRIVATE-ADMIN" };
      } else if (contact.toLowerCase().includes("staff@truckgo.us")) {
        currentUser = { name: name || "Office Staff", email: contact, role: "staff", docInfo: "STAFF-LIMITED" };
      } else if (authMode === "signup") {
        const docInfo = getRoleDocSummary();
        const u = { name, email: contact, role: selectedRole, docInfo };
        users = [u, ...users.filter((x) => x.email !== contact)];
        currentUser = u;
      } else {
        const existing = users.find((x) => x.email === contact);
        currentUser = existing || { name, email: contact, role: selectedRole, docInfo: "Active" };
      }

      addSecurityLog(`Entered as ${currentUser.name} (${currentUser.role.toUpperCase()})`);
      saveState();
      renderApp();
    });

    function quickLogin(role) {
      currentUser = users.find((u) => u.role === role) || { name: role.toUpperCase(), email: `${role}@truckgo.us`, role, docInfo: "Active" };
      addSecurityLog(`Opened ${currentUser.role.toUpperCase()} portal`);
      saveState();
      renderApp();
    }

    function switchRoleQuick(role) {
      if (!currentUser) return;
      currentUser = { ...currentUser, role };
      saveState();
      renderApp();
    }

    function logoutUser() {
      stopLiveGPS();
      currentUser = null;
      if (window.location.search.includes("admin=true")) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
      saveState();
      renderApp();
    }

    function removeTruckDriver(truckId) {
      trucks = trucks.map((t) => (t.id === truckId ? { ...t, driver: "Unassigned", status: "Needs Driver" } : t));
      addSecurityLog(`Owner removed driver from Truck #${truckId}`);
      saveState();
      renderApp();
    }

    function removeLoadDriver(loadId) {
      loads = loads.map((l) => {
        if (l.id !== loadId || l.status === "Delivered") return l;
        return {
          ...l,
          driver: "Available for Driver",
          status: "Open",
          pickedUp: false,
          acceptedAt: 0,
          payoutStatus: "HELD UNTIL DELIVERY",
          gpsActive: false,
          gpsUpdated: "Driver Unassigned"
        };
      });
      addSecurityLog(`Owner removed assigned driver from Load #${loadId}`);
      saveState();
      renderApp();
    }

    function selectPayMethod(btn) {
      selectedPayMethod = btn.getAttribute("data-pay") || "Stripe Card (Visa/MC/Amex)";
      document.querySelectorAll(".pay-chip-btn").forEach((el) => el.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("pay-method-hint").textContent =
        `Selected: ${selectedPayMethod} • Held until delivery, instant payout to Truck Owner upon completion`;
    }

    function applyRoutePreset(origin, dest, weight) {
      document.getElementById("load-origin").value = origin;
      document.getElementById("load-dest").value = dest;
      document.getElementById("load-return-origin").value = dest;
      document.getElementById("load-return-dest").value = origin;
      document.getElementById("load-weight").value = weight;
      const c1 = lookupCoordsFromAddress(origin);
      const c2 = lookupCoordsFromAddress(dest);
      if (c1 && c2) {
        document.getElementById("load-miles").value = haversineMiles(c1[0], c1[1], c2[0], c2[1]);
      }
      calculateAutoRate();
    }

    function calculateLegFare(legMiles, legWeight, type) {
      const rpmMap = {
        "Express Courier Van": 2.15,
        "26ft Box Truck": 2.65,
        "53ft Dry Van": 3.05,
        "53ft Reefer": 3.50,
        "48ft Flatbed": 3.25
      };
      const rpm = rpmMap[type] || 2.95;
      const shortHaulBoost = legMiles < 250 ? (250 - legMiles) * 1.15 : 0;
      const weightSurcharge = (legWeight / 1000) * 28;
      return Math.round(legMiles * rpm + shortHaulBoost + weightSurcharge);
    }

    function calculateAutoRate() {
      const originEl = document.getElementById("load-origin");
      const destEl = document.getElementById("load-dest");
      const retOriginEl = document.getElementById("load-return-origin");
      const retDestEl = document.getElementById("load-return-dest");
      const incRetEl = document.getElementById("load-include-return");
      const retBoxEl = document.getElementById("return-details-fields");
      const milesEl = document.getElementById("load-miles");
      const weightEl = document.getElementById("load-weight");
      const retWeightEl = document.getElementById("load-return-weight");
      const typeEl = document.getElementById("load-type");
      if (!milesEl || !weightEl || !typeEl) return { totalMiles: 1280, fare: 4408 };

      const hasReturn = !incRetEl || incRetEl.value === "yes";
      if (retBoxEl) retBoxEl.classList.toggle("hidden", !hasReturn);

      const c1 = lookupCoordsFromAddress(originEl ? originEl.value : "");
      const c2 = lookupCoordsFromAddress(destEl ? destEl.value : "");
      if (c1 && c2 && originEl && destEl && originEl.value.trim() && destEl.value.trim()) {
        if (document.activeElement !== milesEl) {
          milesEl.value = haversineMiles(c1[0], c1[1], c2[0], c2[1]);
        }
      }

      const outboundMiles = Math.max(5, Number(milesEl.value) || 500);
      const outboundWeight = Math.max(50, Number(weightEl.value) || 10000);
      const type = typeEl.value;

      const outboundFare = calculateLegFare(outboundMiles, outboundWeight, type);

      let returnMiles = 0;
      let returnFare = 0;
      if (hasReturn) {
        const ro = (retOriginEl && retOriginEl.value.trim()) || (destEl && destEl.value.trim()) || "";
        const rd = (retDestEl && retDestEl.value.trim()) || (originEl && originEl.value.trim()) || "";
        const rc1 = lookupCoordsFromAddress(ro);
        const rc2 = lookupCoordsFromAddress(rd);
        returnMiles = rc1 && rc2 ? haversineMiles(rc1[0], rc1[1], rc2[0], rc2[1]) : outboundMiles;
        const returnWeight = Math.max(0, Number(retWeightEl && retWeightEl.value) || 0);
        returnFare = calculateLegFare(returnMiles, returnWeight, type);
      }

      const totalMiles = outboundMiles + returnMiles;
      const fare = outboundFare + returnFare;
      const comm = Math.round((fare * commissionPercent) / 100);
      const net = fare - comm;

      document.getElementById("auto-miles-label").textContent =
        totalMiles.toLocaleString() + " miles" + (hasReturn ? ` (${outboundMiles.toLocaleString()} out + ${returnMiles.toLocaleString()} return)` : " (one-way)");
      const legsDetailEl = document.getElementById("legs-fare-detail");
      if (legsDetailEl) {
        legsDetailEl.textContent = hasReturn
          ? `$${outboundFare.toLocaleString()} out + $${returnFare.toLocaleString()} return`
          : `$${outboundFare.toLocaleString()} one-way`;
      }
      document.getElementById("comm-rate-label").textContent = commissionPercent;
      const bannerCommEl = document.getElementById("courier-banner-comm");
      if (bannerCommEl) bannerCommEl.textContent = commissionPercent;
      document.getElementById("auto-fare-display").textContent = "$" + fare.toLocaleString();
      document.getElementById("comm-amount-display").textContent = "$" + comm.toLocaleString();
      document.getElementById("net-payout-display").textContent = "$" + net.toLocaleString();
      return { totalMiles, fare };
    }

    function updateCustomRatePreview() {
      const val = Number(document.getElementById("load-price").value);
      const auto = calculateAutoRate();
      const fare = val > 0 ? val : auto.fare;
      const comm = Math.round((fare * commissionPercent) / 100);
      const net = fare - comm;
      document.getElementById("auto-fare-display").textContent = "$" + fare.toLocaleString();
      document.getElementById("comm-amount-display").textContent = "$" + comm.toLocaleString();
      document.getElementById("net-payout-display").textContent = "$" + net.toLocaleString();
    }

    function saveAdminConfig() {
      const val = Number(document.getElementById("admin-commission-input").value);
      const pk = document.getElementById("admin-stripe-pk").value.trim();
      const ep = document.getElementById("admin-stripe-endpoint").value.trim();

      if (!Number.isNaN(val) && val >= 0 && val <= 50) commissionPercent = val;
      if (pk && !pk.startsWith("sk_")) stripePublishableKey = pk;
      if (!ep || ep.startsWith("https://")) stripeEndpoint = ep;

      initStripe();
      addSecurityLog(`Admin saved settings (Commission: ${commissionPercent}%)`);
      saveState();
      renderApp();
      const msg = document.getElementById("admin-save-msg");
      if (msg) msg.textContent = "✓ Saved";
    }

    document.getElementById("truck-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const unit = document.getElementById("truck-unit").value.trim();
      const equip = document.getElementById("truck-equip").value;
      const driver = document.getElementById("truck-driver").value.trim();
      const ownerLabel = currentUser && currentUser.role === "owner" ? currentUser.name : "Lone Star Trucking";
      if (!unit || !driver) return;
      trucks = [{ id: Date.now(), unit, equip, driver, ownerName: ownerLabel, status: "Ready / Active" }, ...trucks];
      addSecurityLog(`Truck added: ${unit} -> ${driver} (Owner: ${ownerLabel})`);
      saveState();
      e.target.reset();
      renderApp();
    });

    async function triggerStripeCheckoutIfConfigured(loadItem) {
      if (!stripeEndpoint || !stripeEndpoint.startsWith("https://")) return;
      try {
        const res = await fetch(stripeEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            loadId: loadItem.id,
            amountUsd: loadItem.price,
            commissionPercent,
            paymentMethod: loadItem.payMethod,
            route: `${loadItem.origin} -> ${loadItem.dest}`
          })
        });
        const data = await res.json();
        if (data && data.url) {
          window.open(data.url, "_blank", "noopener");
        }
      } catch (_err) {}
    }

    document.getElementById("courier-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const defaultCourier = currentUser && currentUser.role === "courier" ? currentUser.name : "SwiftBox Courier USA";
      const companyName = (document.getElementById("load-company-name").value.trim() || defaultCourier);
      const cargoDesc = (document.getElementById("load-cargo-desc").value.trim() || "General Freight");
      const pickupDate = document.getElementById("load-pickup-date").value || getDefaultPickupDate();
      const hasReturn = document.getElementById("load-include-return").value === "yes";
      const returnDate = hasReturn ? (document.getElementById("load-return-date").value || getDefaultReturnDate()) : "";
      const origin = document.getElementById("load-origin").value.trim();
      const dest = document.getElementById("load-dest").value.trim();
      const returnOrigin = hasReturn ? (document.getElementById("load-return-origin").value.trim() || dest) : "";
      const returnDest = hasReturn ? (document.getElementById("load-return-dest").value.trim() || origin) : "";
      const miles = Math.max(5, Number(document.getElementById("load-miles").value) || 500);
      const weight = Math.max(50, Number(document.getElementById("load-weight").value) || 10000);
      const returnWeight = hasReturn ? Math.max(0, Number(document.getElementById("load-return-weight").value) || 0) : 0;
      const type = document.getElementById("load-type").value;
      const autoCalc = calculateAutoRate();
      const manualPrice = Number(document.getElementById("load-price").value);
      const price = manualPrice > 0 ? manualPrice : autoCalc.fare;
      if (!origin || !dest) return;

      const startCoords = lookupCoordsFromAddress(origin) || [32.7767, -96.7970];
      const defaultOwner = trucks[0]?.ownerName || "Lone Star Trucking";

      const newLoad = {
        id: Date.now(),
        companyName,
        cargoDesc,
        pickupDate,
        returnDate,
        hasReturn,
        origin,
        dest,
        returnOrigin,
        returnDest,
        miles,
        totalMiles: autoCalc.totalMiles,
        weight,
        returnWeight,
        type,
        price,
        payMethod: selectedPayMethod,
        status: "Open",
        payoutStatus: "HELD UNTIL DELIVERY",
        driver: "Available for Driver",
        courierName: companyName,
        truckOwner: defaultOwner,
        acceptedAt: 0,
        pickedUp: false,
        lat: startCoords[0],
        lng: startCoords[1],
        gpsActive: false,
        gpsUpdated: "Off (Trip Not Started)",
        messages: [
          {
            sender: "Courier",
            text: `${companyName}: ${cargoDesc} (${type}) • Goes on ${pickupDate}${hasReturn ? ` • Return ${returnDate} (${returnOrigin} -> ${returnDest})` : ""}.`,
            docName: ""
          }
        ]
      };

      loads = [newLoad, ...loads];
      addSecurityLog(`Active load posted by ${companyName} (${type}, ${weight} lbs, Goes on: ${pickupDate}${hasReturn ? `, Return: ${returnDate}` : ""}): ${origin} -> ${dest} ($${price})`);
      saveState();
      await triggerStripeCheckoutIfConfigured(newLoad);

      if (sb) {
        try {
          await sb.from("loads").insert([{ origin, destination: dest, truck_type: type, rate: price, status: "Open" }]);
        } catch (_err) {}
      }

      e.target.reset();
      document.getElementById("load-pickup-date").value = getDefaultPickupDate();
      document.getElementById("load-return-date").value = getDefaultReturnDate();
      document.getElementById("load-miles").value = 1280;
      document.getElementById("load-weight").value = 18000;
      document.getElementById("load-return-weight").value = 14000;
      calculateAutoRate();
      renderApp();
    });

    function acceptLoad(id) {
      const actor = currentUser && currentUser.role === "driver" ? currentUser.name : "Marcus Johnson";
      const matchedTruck = trucks.find((t) => t.driver.toLowerCase() === actor.toLowerCase()) || trucks[0];
      const ownerForLoad = matchedTruck?.ownerName || "Lone Star Trucking";

      loads = loads.map((l) =>
        l.id === id
          ? {
              ...l,
              status: "Booked / Pickup Pending",
              payoutStatus: "HELD UNTIL DELIVERY (LOCKED)",
              driver: actor,
              truckOwner: ownerForLoad,
              acceptedAt: Date.now(),
              pickedUp: false,
              gpsUpdated: "Booked — Confirm Pickup Next"
            }
          : l
      );
      addSecurityLog(`Driver ${actor} booked Load #${id} (Truck Owner: ${ownerForLoad}) — delivery payout locked until pickup & delivery`);
      saveState();
      renderApp();
    }

    function confirmPickupStep(id) {
      loads = loads.map((l) => {
        if (l.id !== id || l.status === "Delivered") return l;
        return {
          ...l,
          status: "In Transit (Picked Up)",
          pickedUp: true,
          payoutStatus: "HELD UNTIL DELIVERY (IN TRANSIT)",
          gpsUpdated: "In Transit"
        };
      });
      addSecurityLog(`Pickup confirmed for Load #${id} — now in transit toward delivery`);
      saveState();
      renderApp();
    }

    function releaseInstantPayout(id) {
      let blocked = false;
      loads = loads.map((l) => {
        if (l.id !== id) return l;
        const elapsedSec = l.acceptedAt ? Math.floor((Date.now() - l.acceptedAt) / 1000) : 999;
        if (!l.pickedUp || elapsedSec < 5) {
          blocked = true;
          return l;
        }
        const comm = Math.round((l.price * commissionPercent) / 100);
        const net = l.price - comm;
        const ownerBankLabel = ownerBankAccount ? `Owner Bank (${ownerBankAccount})` : `${l.truckOwner || "Truck Owner"} Payout Account`;
        addSecurityLog(`INSTANT PAYOUT ON DELIVERY (#${id}): $${net} to ${ownerBankLabel} (after $${comm} / ${commissionPercent}% platform fee from $${l.price} total)`);
        return {
          ...l,
          status: "Delivered",
          gpsActive: false,
          gpsUpdated: "Stopped (Delivered)",
          payoutStatus: `PAID INSTANTLY ON DELIVERY $${net.toLocaleString()} • ${ownerBankLabel}`
        };
      });
      stopLiveGPS();
      saveState();
      renderApp();
      if (blocked) {
        alert("Anti-Fraud Lock: Confirm Pickup first and wait at least 5 seconds after accepting before marking Delivered.");
      }
    }

    function sendDirectChat(loadId, defaultSenderRole) {
      const msgEl = document.getElementById(`msg-input-${loadId}-${defaultSenderRole}`);
      const senderSelect = document.getElementById(`msg-sender-${loadId}-${defaultSenderRole}`);
      const docEl = document.getElementById(`doc-input-${loadId}-${defaultSenderRole}`);
      const text = msgEl ? msgEl.value.trim() : "";
      const senderRole = senderSelect ? senderSelect.value : defaultSenderRole;
      const docName = docEl && docEl.files[0] ? docEl.files[0].name : "";
      if (!text && !docName) return;

      loads = loads.map((l) => {
        if (l.id !== loadId) return l;
        return {
          ...l,
          messages: [...(l.messages || []), { sender: senderRole, text: text || "Document shared", docName }]
        };
      });
      saveState();
      renderApp();
    }

    function renderLoadSpecsLine(l, netPayout, commAmount) {
      const companyDisplay = l.companyName || l.courierName || "Courier Company";
      const cargoDisplay = l.cargoDesc || "Freight Load";
      const weightDisplay = `${Number(l.weight || 0).toLocaleString()} lbs${l.hasReturn ? ` + ${Number(l.returnWeight || 0).toLocaleString()} lbs return` : ""}`;
      const returnLine = l.hasReturn
        ? `<br/>Return Trip: <strong>${escapeHtml(l.returnDate || "Scheduled")}</strong> • <strong>${escapeHtml(l.returnOrigin || l.dest)} &rarr; ${escapeHtml(l.returnDest || l.origin)}</strong>`
        : "";

      return `
        <div class="item-meta">
          Company: <strong>${escapeHtml(companyDisplay)}</strong> • Truck Needed: <strong>${escapeHtml(l.type || "Truck")}</strong><br/>
          Load / Cargo: <strong>${escapeHtml(cargoDisplay)}</strong> • Weight: <strong>${escapeHtml(weightDisplay)}</strong> • Distance: <strong>${Number(l.totalMiles || l.miles || 0).toLocaleString()} mi</strong><br/>
          Goes on: <strong>${escapeHtml(l.pickupDate || "Scheduled")}</strong> • Owner: <strong>${escapeHtml(l.truckOwner || "Owner")}</strong> • Owner Payout: <strong>$${netPayout.toLocaleString()}</strong> (Fee: $${commAmount.toLocaleString()} / ${commissionPercent}%)${returnLine}
        </div>
      `;
    }

    function renderThreeWayChatBox(load, defaultRoleLabel) {
      const msgsHtml = (load.messages || [])
        .map(
          (m) => `
          <div class="msg-row">
            <strong>${escapeHtml(m.sender)}:</strong> ${escapeHtml(m.text)}
            ${m.docName ? `<div><span class="doc-chip">Doc: ${escapeHtml(m.docName)}</span></div>` : ""}
          </div>
        `
        )
        .join("");

      return `
        <div class="comm-box">
          <div style="font-size:11px; font-weight:800; color:#334155; margin-bottom:6px;">
            3-Way Load Chat: Courier ↔ Driver ↔ Truck Owner (${escapeHtml(load.truckOwner || "Owner")})
          </div>
          ${msgsHtml}
          <div class="field" style="margin-bottom:6px;">
            <label style="font-size:11px;">Send Message As</label>
            <select id="msg-sender-${load.id}-${defaultRoleLabel}">
              <option value="Courier" ${defaultRoleLabel === "Courier" ? "selected" : ""}>Courier</option>
              <option value="Driver" ${defaultRoleLabel === "Driver" ? "selected" : ""}>Driver</option>
              <option value="Truck Owner" ${defaultRoleLabel === "Truck Owner" ? "selected" : ""}>Truck Owner (Payout Recipient)</option>
            </select>
          </div>
          <div class="field" style="margin-bottom:6px;">
            <input id="msg-input-${load.id}-${defaultRoleLabel}" type="text" placeholder="Message courier, driver & truck owner..." />
          </div>
          <div class="field" style="margin-bottom:8px;">
            <input id="doc-input-${load.id}-${defaultRoleLabel}" type="file" accept=".pdf,.jpg,.jpeg,.png" />
          </div>
          <button type="button" class="btn btn-dark btn-sm" onclick="sendDirectChat(${load.id}, '${defaultRoleLabel}')">Send</button>
        </div>
      `;
    }

    function renderAssignedPartyGps(load, watcherLabel) {
      const hasDriverAssigned = load.status !== "Open" && load.driver && load.driver !== "Available for Driver";
      if (!hasDriverAssigned) {
        return `
          <div class="gps-live-card">
            <div style="font-size:11px; color:#FDBA74;">${escapeHtml(watcherLabel)} • PRIVATE TO ASSIGNED PARTIES</div>
            <div class="gps-coords">Trip GPS starts once assigned driver books this order</div>
          </div>
        `;
      }
      const stateText = load.gpsActive ? `LIVE (${escapeHtml(load.gpsUpdated || "Active")})` : `PAUSED / OFF (${escapeHtml(load.gpsUpdated || "Not Forever")})`;
      return `
        <div class="gps-live-card">
          <div style="font-size:11px; color:#86EFAC;">${escapeHtml(watcherLabel)} • Driver: ${escapeHtml(load.driver)} • ${stateText}</div>
          <div class="gps-coords">Lat: ${escapeHtml(load.lat)}, Lng: ${escapeHtml(load.lng)}</div>
          <a class="map-link" href="https://maps.google.com/?q=${encodeURIComponent(load.lat)},${encodeURIComponent(load.lng)}" target="_blank" rel="noopener">
            Open Last / Live Location on Google Maps &rarr;
          </a>
        </div>
      `;
    }

    function stopLiveGPS() {
      if (gpsWatchId !== null && navigator.geolocation) {
        navigator.geolocation.clearWatch(gpsWatchId);
        gpsWatchId = null;
      }
      loads = loads.map((l) => (l.gpsActive ? { ...l, gpsActive: false, gpsUpdated: "Stopped by Driver" } : l));
      saveState();
      const statusText = document.getElementById("gps-status-text");
      if (statusText) statusText.textContent = "GPS Off (Stopped)";
    }

    function startLiveGPS() {
      const statusText = document.getElementById("gps-status-text");
      const coordsText = document.getElementById("gps-coords-display");
      const mapLink = document.getElementById("gps-map-link");

      if (!navigator.geolocation) {
        statusText.textContent = "GPS not supported";
        return;
      }

      stopLiveGPS();
      statusText.textContent = "Connecting Live GPS (Assigned Order Only)...";
      gpsWatchId = navigator.geolocation.watchPosition(
        (pos) => {
          const lat = pos.coords.latitude.toFixed(5);
          const lng = pos.coords.longitude.toFixed(5);
          const nowTime = new Date().toLocaleTimeString();
          statusText.textContent = "LIVE GPS SHARING (ASSIGNED OWNER & COURIER ONLY)";
          coordsText.textContent = `Lat: ${lat}, Lng: ${lng}`;
          mapLink.href = `https://maps.google.com/?q=${lat},${lng}`;

          const activeDriverName = currentUser && currentUser.role === "driver" ? currentUser.name.toLowerCase() : "";
          loads = loads.map((l) => {
            const isAssignedToThisDriver =
              l.status !== "Open" &&
              l.status !== "Delivered" &&
              (!activeDriverName || String(l.driver || "").toLowerCase().includes(activeDriverName));
            return isAssignedToThisDriver
              ? { ...l, lat: Number(lat), lng: Number(lng), gpsActive: true, gpsUpdated: nowTime }
              : l;
          });
          saveState();
        },
        () => {
          statusText.textContent = "Allow GPS permission in browser";
        },
        { enableHighAccuracy: true }
      );
    }

    function useCurrentGpsForNearbyLoads() {
      if (!navigator.geolocation) return;
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        let nearestCity = "Dallas, TX";
        let bestDist = Infinity;
        for (const [cityName, c] of Object.entries(CITY_COORDS)) {
          const d = haversineMiles(lat, lng, c[0], c[1]);
          if (d < bestDist) {
            bestDist = d;
            nearestCity = cityName.replace(/\b\w/g, (ch) => ch.toUpperCase());
          }
        }
        const el = document.getElementById("public-nearby-city");
        if (el) el.value = nearestCity;
        renderPublicLoadBoard();
      });
    }

    function useCurrentGpsForDriver() {
      if (!navigator.geolocation) return;
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        let nearestCity = "Dallas, TX";
        let bestDist = Infinity;
        for (const [cityName, c] of Object.entries(CITY_COORDS)) {
          const d = haversineMiles(lat, lng, c[0], c[1]);
          if (d < bestDist) {
            bestDist = d;
            nearestCity = cityName.replace(/\b\w/g, (ch) => ch.toUpperCase());
          }
        }
        const el = document.getElementById("driver-nearby-city");
        if (el) el.value = nearestCity;
        renderApp();
      });
    }

    function getDistanceBadgeForCity(originText, cityFilterText) {
      const q = String(cityFilterText || "").trim().toLowerCase();
      if (!q) return "";
      const c1 = lookupCoordsFromAddress(originText);
      const c2 = lookupCoordsFromAddress(q);
      if (!c1 || !c2) return "";
      const dist = haversineMiles(c1[0], c1[1], c2[0], c2[1]);
      return `<span class="badge badge-open">~${dist.toLocaleString()} mi from ${escapeHtml(cityFilterText.trim())}</span>`;
    }

    function renderPublicLoadBoard() {
      const boardEl = document.getElementById("public-loads-board");
      if (!boardEl) return;
      const cityFilter = document.getElementById("public-nearby-city")?.value.trim().toLowerCase() || "";

      const activeLoads = loads
        .filter((l) => l.status !== "Delivered")
        .sort((a, b) => {
          if (!cityFilter) return 0;
          const ca = lookupCoordsFromAddress(a.origin);
          const cb = lookupCoordsFromAddress(b.origin);
          const cc = lookupCoordsFromAddress(cityFilter);
          if (!ca || !cb || !cc) return 0;
          return haversineMiles(ca[0], ca[1], cc[0], cc[1]) - haversineMiles(cb[0], cb[1], cc[0], cc[1]);
        });

      if (!activeLoads.length) {
        boardEl.innerHTML = `<div class="item-meta">No active loads right now. Courier can post an active load anytime.</div>`;
        return;
      }

      boardEl.innerHTML = activeLoads
        .map((l) => {
          const comm = Math.round((l.price * commissionPercent) / 100);
          const net = l.price - comm;
          const nearBadge = getDistanceBadgeForCity(l.origin, cityFilter);
          return `
            <div class="list-item">
              <div class="item-top">
                <div class="item-title">${escapeHtml(l.origin)} &rarr; ${escapeHtml(l.dest)}</div>
                <span class="badge badge-open">Goes on: ${escapeHtml(l.pickupDate || "Scheduled")}</span>
              </div>
              ${renderLoadSpecsLine(l, net, comm)}
              ${nearBadge ? `<div style="margin-bottom:8px;">${nearBadge}</div>` : ""}
              ${l.status === "Open" ? `<button type="button" class="btn btn-green btn-sm" onclick="quickLogin('driver'); acceptLoad(${l.id});">Quick Book Load as Driver</button>` : `<span class="badge badge-info">Driver: ${escapeHtml(l.driver)}</span>`}
            </div>
          `;
        })
        .join("");
    }

    function renderPrivateDeliveredCards(deliveredItems, emptyText) {
      if (!deliveredItems.length) {
        return `<div class="item-meta">${escapeHtml(emptyText)}</div>`;
      }
      return deliveredItems
        .map((l) => {
          const comm = Math.round((l.price * commissionPercent) / 100);
          const net = l.price - comm;
          return `
            <div class="list-item">
              <div class="item-top">
                <div class="item-title">Load #${escapeHtml(l.id)}: ${escapeHtml(l.origin)} &rarr; ${escapeHtml(l.dest)}</div>
                <span class="badge badge-open">Delivered (Private)</span>
              </div>
              <div class="item-meta">
                Company: <strong>${escapeHtml(l.companyName || l.courierName || "Courier")}</strong> • Truck: <strong>${escapeHtml(l.type || "Truck")}</strong> • Went on: <strong>${escapeHtml(l.pickupDate || "Scheduled")}</strong>${l.hasReturn ? ` • Return: <strong>${escapeHtml(l.returnDate || "Scheduled")}</strong>` : ""}
                • Driver: <strong>${escapeHtml(l.driver)}</strong> • Owner: <strong>${escapeHtml(l.truckOwner || "Owner")}</strong>
                • Payout: <strong>$${net.toLocaleString()}</strong>
              </div>
            </div>
          `;
        })
        .join("");
    }

    function renderApp() {
      initStripe();
      setLanguage(lang);
      calculateAutoRate();

      const pickupDateEl = document.getElementById("load-pickup-date");
      const returnDateEl = document.getElementById("load-return-date");
      if (pickupDateEl && !pickupDateEl.value) pickupDateEl.value = getDefaultPickupDate();
      if (returnDateEl && !returnDateEl.value) returnDateEl.value = getDefaultReturnDate();

      document.getElementById("admin-commission-input").value = commissionPercent;
      document.getElementById("admin-stripe-pk").value = stripePublishableKey;
      document.getElementById("admin-stripe-endpoint").value = stripeEndpoint;

      const admBankEl = document.getElementById("admin-payout-bank");
      const ownerBankEl = document.getElementById("owner-bank-account");
      const courierBankEl = document.getElementById("courier-bank-account");
      if (admBankEl) admBankEl.value = adminPayoutBank;
      if (ownerBankEl) ownerBankEl.value = ownerBankAccount;
      if (courierBankEl) courierBankEl.value = courierBankAccount;
      saveBankAccounts();

      const params = new URLSearchParams(window.location.search);
      if (params.get("admin") === "true" && (!currentUser || currentUser.role !== "admin")) {
        currentUser = { name: "TRUCKGO Admin", email: "admin@truckgo.us", role: "admin", docInfo: "PRIVATE-ADMIN" };
        saveState();
      }

      const homeView = document.getElementById("home-view");
      const bottomNav = document.getElementById("bottom-nav");
      const headerUser = document.getElementById("header-user");

      ["portal-owner", "portal-driver", "portal-courier", "portal-staff", "portal-admin"].forEach((id) => {
        document.getElementById(id).classList.add("hidden");
      });

      if (!currentUser) {
        homeView.classList.remove("hidden");
        bottomNav.classList.add("hidden");
        headerUser.textContent = "Home";
        renderPublicLoadBoard();
        return;
      }

      homeView.classList.add("hidden");
      bottomNav.classList.remove("hidden");
      headerUser.textContent = `${currentUser.name} (${currentUser.role})`;

      const portal = document.getElementById(`portal-${currentUser.role}`);
      if (portal) portal.classList.remove("hidden");

      const activeOnlyLoads = loads.filter((l) => l.status !== "Delivered");
      const allDeliveredLoads = loads.filter((l) => l.status === "Delivered");

      const userNameLow = String(currentUser.name || "").toLowerCase();
      const userEmailLow = String(currentUser.email || "").toLowerCase();

      const ownerDelivered = allDeliveredLoads.filter(
        (l) =>
          String(l.truckOwner || "").toLowerCase().includes(userNameLow) ||
          userEmailLow.includes("owner@truckgo.us")
      );
      const driverDelivered = allDeliveredLoads.filter(
        (l) =>
          String(l.driver || "").toLowerCase().includes(userNameLow) ||
          userEmailLow.includes("driver@truckgo.us")
      );
      const courierDelivered = allDeliveredLoads.filter(
        (l) =>
          String(l.courierName || "").toLowerCase().includes(userNameLow) ||
          String(l.companyName || "").toLowerCase().includes(userNameLow) ||
          userEmailLow.includes("courier@truckgo.us")
      );

      document.getElementById("fleet-count").textContent = trucks.length;
      document.getElementById("fleet-list").innerHTML = trucks
        .map(
          (t) => `
          <div class="list-item">
            <div class="item-top"><div class="item-title">${escapeHtml(t.unit)}</div><span class="badge badge-open">${escapeHtml(t.status)}</span></div>
            <div class="item-meta">${escapeHtml(t.equip)} • Driver: <strong>${escapeHtml(t.driver)}</strong> • Owner: <strong>${escapeHtml(t.ownerName || "Owner")}</strong></div>
            ${t.driver !== "Unassigned" ? `<button type="button" class="btn btn-red btn-sm" onclick="removeTruckDriver(${t.id})">Remove Driver</button>` : ""}
          </div>
        `
        )
        .join("");

      document.getElementById("owner-loads-list").innerHTML = activeOnlyLoads
        .map((l) => {
          const comm = Math.round((l.price * commissionPercent) / 100);
          const net = l.price - comm;
          const hasAssignedDriver = l.status !== "Open" && l.status !== "Delivered";
          return `
            <div class="list-item">
              <div class="item-top">
                <div class="item-title">Load #${escapeHtml(l.id)}: ${escapeHtml(l.origin)} &rarr; ${escapeHtml(l.dest)}</div>
                <span class="badge badge-open">Goes on: ${escapeHtml(l.pickupDate || "Scheduled")}</span>
              </div>
              ${renderLoadSpecsLine(l, net, comm)}
              ${renderAssignedPartyGps(l, "OWNER & ASSIGNED COURIER ONLY")}
              <div class="item-meta">Driver: <strong>${escapeHtml(l.driver)}</strong> • Owner: <strong>${escapeHtml(l.truckOwner || "Owner")}</strong> • Status: ${escapeHtml(l.status)}</div>
              ${hasAssignedDriver ? `<button type="button" class="btn btn-red btn-sm" onclick="removeLoadDriver(${l.id})">Remove Driver from Load</button>` : ""}
              ${renderThreeWayChatBox(l, "Truck Owner")}
            </div>
          `;
        })
        .join("");

      document.getElementById("owner-delivered-list").innerHTML = renderPrivateDeliveredCards(
        ownerDelivered,
        "No delivered loads yet for your owner account. Delivered loads stay private to you, the driver & courier."
      );

      const driverCityFilter = document.getElementById("driver-nearby-city")?.value.trim().toLowerCase() || "";
      const driverLoadsSorted = [...activeOnlyLoads].sort((a, b) => {
        if (!driverCityFilter) return 0;
        const ca = lookupCoordsFromAddress(a.origin);
        const cb = lookupCoordsFromAddress(b.origin);
        const cc = lookupCoordsFromAddress(driverCityFilter);
        if (!ca || !cb || !cc) return 0;
        return haversineMiles(ca[0], ca[1], cc[0], cc[1]) - haversineMiles(cb[0], cb[1], cc[0], cc[1]);
      });

      document.getElementById("driver-loads-list").innerHTML = driverLoadsSorted
        .map((l) => {
          const comm = Math.round((l.price * commissionPercent) / 100);
          const net = l.price - comm;
          const canDeliver = l.status !== "Open" && l.status !== "Delivered" && l.pickedUp;
          const nearBadge = getDistanceBadgeForCity(l.origin, driverCityFilter);
          return `
            <div class="list-item">
              <div class="item-top">
                <div class="item-title">Load #${escapeHtml(l.id)}: ${escapeHtml(l.origin)} &rarr; ${escapeHtml(l.dest)}</div>
                <span class="badge badge-open">Goes on: ${escapeHtml(l.pickupDate || "Scheduled")}</span>
              </div>
              ${renderLoadSpecsLine(l, net, comm)}
              ${nearBadge ? `<div style="margin-bottom:8px;">${nearBadge}</div>` : ""}
              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                ${l.status === "Open" ? `<button class="btn btn-green btn-sm" onclick="acceptLoad(${l.id})">Book / Accept Load (Held Until Delivery)</button>` : `<span class="badge badge-info">Driver: ${escapeHtml(l.driver)}</span>`}
                ${l.status !== "Open" && l.status !== "Delivered" && !l.pickedUp ? `<button class="btn btn-blue btn-sm" onclick="confirmPickupStep(${l.id})">1. Confirm Pickup</button>` : ""}
                ${l.status !== "Delivered" ? `<button class="btn btn-dark btn-sm" ${canDeliver ? "" : "disabled"} onclick="releaseInstantPayout(${l.id})">${canDeliver ? "2. Confirm Delivery & Pay Owner" : "Delivery Locked Until Pickup"}</button>` : ""}
              </div>
              ${renderThreeWayChatBox(l, "Driver")}
            </div>
          `;
        })
        .join("");

      document.getElementById("driver-delivered-list").innerHTML = renderPrivateDeliveredCards(
        driverDelivered,
        "No delivered loads yet under your driver profile. Completed loads stay private to you, the owner & courier."
      );

      document.getElementById("courier-loads-list").innerHTML = activeOnlyLoads
        .map((l) => {
          const comm = Math.round((l.price * commissionPercent) / 100);
          const net = l.price - comm;
          const canDeliver = l.status !== "Open" && l.status !== "Delivered" && l.pickedUp;
          return `
            <div class="list-item">
              <div class="item-top">
                <div class="item-title">Load #${escapeHtml(l.id)}: ${escapeHtml(l.origin)} &rarr; ${escapeHtml(l.dest)}</div>
                <span class="badge badge-open">Goes on: ${escapeHtml(l.pickupDate || "Scheduled")}</span>
              </div>
              ${renderLoadSpecsLine(l, net, comm)}
              <div class="item-meta">Total Rent: <strong>$${l.price.toLocaleString()}</strong> • Platform Fee (${commissionPercent}%): <strong>$${comm.toLocaleString()}</strong> • Owner Payout: <strong>$${net.toLocaleString()}</strong></div>
              ${renderAssignedPartyGps(l, "COURIER & ASSIGNED OWNER ONLY")}
              <button class="btn btn-green btn-sm" style="margin-bottom:8px;" ${canDeliver ? "" : "disabled"} onclick="releaseInstantPayout(${l.id})">${canDeliver ? "Confirm Delivery & Release Payout to Owner" : "Payment Held Until Pickup & Delivery"}</button>
              ${renderThreeWayChatBox(l, "Courier")}
            </div>
          `;
        })
        .join("");

      document.getElementById("courier-delivered-list").innerHTML = renderPrivateDeliveredCards(
        courierDelivered,
        "No delivered loads yet for your courier account. Completed loads stay private to you, the driver & owner."
      );

      document.getElementById("staff-loads-list").innerHTML = activeOnlyLoads
        .map(
          (l) => `
          <div class="list-item">
            <div class="item-top">
              <div class="item-title">Load #${escapeHtml(l.id)}: ${escapeHtml(l.origin)} &rarr; ${escapeHtml(l.dest)}</div>
              <span class="badge badge-teal">Goes on: ${escapeHtml(l.pickupDate || "Scheduled")}</span>
            </div>
            <div class="item-meta">Company: <strong>${escapeHtml(l.companyName || l.courierName || "Courier")}</strong> • Truck: <strong>${escapeHtml(l.type || "Truck")}</strong> • Driver: <strong>${escapeHtml(l.driver)}</strong> • Owner: <strong>${escapeHtml(l.truckOwner || "Owner")}</strong></div>
            ${renderThreeWayChatBox(l, "Courier")}
          </div>
        `
        )
        .join("");

      document.getElementById("staff-audit-logs").innerHTML = securityLogs
        .map((entry) => `<div class="msg-row"><span class="badge badge-teal">AUDIT</span> ${escapeHtml(entry)}</div>`)
        .join("");

      const totalCommission = loads.reduce((sum, l) => sum + Math.round((l.price * commissionPercent) / 100), 0);
      const availableAdmin = Math.max(0, totalCommission - adminWithdrawnTotal);
      const totalInstantPaid = loads.reduce((sum, l) => {
        if (l.status !== "Delivered") return sum;
        const comm = Math.round((l.price * commissionPercent) / 100);
        return sum + (l.price - comm);
      }, 0);

      document.getElementById("adm-users").textContent = users.length;
      document.getElementById("adm-commission-total").textContent = "$" + totalCommission.toLocaleString();
      document.getElementById("adm-earned-box").textContent = "$" + totalCommission.toLocaleString();
      document.getElementById("adm-withdrawn-box").textContent = "$" + adminWithdrawnTotal.toLocaleString();
      document.getElementById("adm-available-box").textContent = "$" + availableAdmin.toLocaleString();
      document.getElementById("adm-instant-paid").textContent = "$" + totalInstantPaid.toLocaleString();

      document.getElementById("admin-users-list").innerHTML = users
        .map(
          (u) => `
          <div class="list-item">
            <div class="item-top">
              <div class="item-title">${escapeHtml(u.name)}</div>
              <span class="badge badge-purple">${escapeHtml(u.role.toUpperCase())}</span>
            </div>
            <div class="item-meta">${escapeHtml(u.email)} • ${escapeHtml(u.docInfo)}</div>
          </div>
        `
        )
        .join("");

      document.getElementById("admin-security-logs").innerHTML = securityLogs
        .map((entry) => `<div class="msg-row"><span class="badge badge-sec">LOG</span> ${escapeHtml(entry)}</div>`)
        .join("");
    }

    renderApp();
  </script>
</body>
</html>

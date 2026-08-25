#!/usr/bin/env python3
"""
Genera las capturas de pantalla 13-21 de CompraFacil (usabilidad-web-lab),
correspondientes a los 9 nuevos problemas de usabilidad añadidos
(dark patterns + Ley de Hick / Miller / Fitts).

Uso:
    source /home/krizrome_desktop/.hermes/hermes-agent/venv/bin/activate
    python scripts/take-screenshots-v2.py
"""
import os
import time
from playwright.sync_api import sync_playwright

OUT = "/home/krizrome_desktop/usabilidad-web-lab/docs/screenshots"
URL = os.environ.get("APP_URL", "http://localhost:5173")

os.makedirs(OUT, exist_ok=True)


def shot(page, name):
    path = os.path.join(OUT, name)
    page.screenshot(path=path)
    print(f"  saved {name}")


def clip_of(page, selector, pad=0):
    box = page.locator(selector).first.bounding_box()
    if not box:
        return None
    return {
        "x": max(box["x"] - pad, 0),
        "y": max(box["y"] - pad, 0),
        "width": box["width"] + pad * 2,
        "height": box["height"] + pad * 2,
    }


def main():
    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        page = browser.new_page(viewport={"width": 1280, "height": 1000})
        page.goto(URL, wait_until="networkidle")

        # ---- 19 mega-nav (Ley de Hick) ----
        page.wait_for_selector(".mega-nav")
        page.locator(".mega-nav-item").nth(2).hover()
        time.sleep(0.3)
        box = clip_of(page, ".mega-nav", pad=0)
        if box:
            box["height"] += 200  # incluir el dropdown desplegado
            page.screenshot(path=os.path.join(OUT, "19-hick-mega-nav.png"), clip=box)
            print("  saved 19-hick-mega-nav.png")

        # ---- ir al detalle de un producto ----
        page.locator('[data-route="home"]').first.click()
        page.wait_for_selector(".product-grid")
        page.locator(".view-detail").first.click()
        page.wait_for_selector(".detail-view")
        time.sleep(0.3)

        # ---- 20 muro de especificaciones (Ley de Miller) ----
        page.locator(".detail-specs").scroll_into_view_if_needed()
        time.sleep(0.3)
        box = clip_of(page, ".detail-specs", pad=10)
        if box:
            page.screenshot(path=os.path.join(OUT, "20-miller-specs-muro.png"), clip=box)
            print("  saved 20-miller-specs-muro.png")

        # ---- 15 disguised ad ----
        page.locator(".disguised-ad").scroll_into_view_if_needed()
        time.sleep(0.3)
        box = clip_of(page, ".disguised-ad", pad=10)
        if box:
            page.screenshot(path=os.path.join(OUT, "15-hidden-ads-banner.png"), clip=box)
            print("  saved 15-hidden-ads-banner.png")

        # ---- agregar al carrito y pasar por el stepper de checkout ----
        page.locator('[data-route="home"]').first.click()
        page.wait_for_selector(".product-grid")
        page.locator(".add-to-cart").first.click()
        time.sleep(0.2)
        page.locator("#cart-btn").click()
        page.wait_for_selector(".cart-overlay.open")
        page.locator("#checkout-btn").click()
        page.wait_for_selector(".stepper-page")
        time.sleep(0.3)

        # ---- 18 stepper con progressive disclosure (paso 1) ----
        shot(page, "18-progress-checkout-trampa.png")

        # avanzar a paso 2 y 3
        page.locator("#step-next").click()
        page.wait_for_selector("#bill-name")
        time.sleep(0.2)
        page.locator("#step-next").click()
        page.wait_for_selector(".fitts-zone")
        time.sleep(0.3)

        # ---- 21 violación de Fitts (botón diminuto vs botón enorme) ----
        shot(page, "21-fitts-button-pequeno.png")

        # completar verificación para llegar al checkout real
        page.fill("#id-phone", "+51 999 111 222")
        page.locator("#fitts-confirm").click()
        page.wait_for_selector(".checkout:not(.stepper-page)")
        time.sleep(0.3)

        # ---- 13 checkbox preseleccionado con trampa legal ----
        page.locator(".partners-optin").scroll_into_view_if_needed()
        time.sleep(0.2)
        page.locator("#opt-partners").click()  # 1er clic: revela el texto trampa
        time.sleep(0.3)
        box = clip_of(page, ".partners-optin", pad=10)
        if box:
            page.screenshot(path=os.path.join(OUT, "13-dark-checkbox-prefilled.png"), clip=box)
            print("  saved 13-dark-checkbox-prefilled.png")

        # ---- completar formulario y hacer el pedido ----
        page.fill("#f-name", "María Pérez")
        page.fill("#f-dni", "45781236")
        page.fill("#f-email", "maria@correo.com")
        page.locator("#place-order").click()
        page.wait_for_selector(".friend-spam-overlay")
        time.sleep(0.3)

        # ---- 14 modal friend spam ----
        shot(page, "14-friend-spam-modal.png")
        page.locator("#friend-spam-decline").click()

        # ---- ir a Mi cuenta -> activar Premium (Forced continuity) ----
        page.locator('[data-route="cuenta"]').first.click()
        page.wait_for_selector("#go-premium")
        page.locator("#go-premium").click()
        page.wait_for_selector(".premium-page")
        time.sleep(0.3)
        page.locator("#activate-trial").click()
        page.wait_for_selector("#cancel-trial")
        time.sleep(0.3)

        # ---- 16 forced continuity (trial premium con botón cancelar deshabilitado) ----
        box = clip_of(page, ".premium-box", pad=10)
        if box:
            page.screenshot(path=os.path.join(OUT, "16-forced-continuity-trial.png"), clip=box)
            print("  saved 16-forced-continuity-trial.png")

        # ---- ir a Política de devoluciones y abrir la sección 11 ----
        page.locator('[data-route="devoluciones"]').first.click()
        page.wait_for_selector(".policy-section")
        section_11 = page.locator(".policy-section").nth(10)
        section_11.locator("summary").click()
        section_11.scroll_into_view_if_needed()
        time.sleep(0.3)

        # ---- 17 información oculta (política de devoluciones) ----
        box = clip_of(page, ".policy-section >> nth=10", pad=10)
        if box:
            page.screenshot(path=os.path.join(OUT, "17-hidden-return-policy.png"), clip=box)
            print("  saved 17-hidden-return-policy.png")

        browser.close()
        print("Listo. Capturas 13-21 en", OUT)


if __name__ == "__main__":
    main()

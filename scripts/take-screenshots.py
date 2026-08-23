#!/usr/bin/env python3
"""
Genera 10 capturas de pantalla de la app CompraFacil (usabilidad-web-lab).
Cada captura ilustra uno o varios problemas intencionales de usabilidad.

Uso:
    source /home/krizrome_desktop/.hermes/hermes-agent/venv/bin/activate
    python scripts/take-screenshots.py
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


def clip_of(page, selector):
    """Devuelve un dict de recorte (clip) a partir del bounding box de un selector."""
    box = page.locator(selector).first.bounding_box()
    if not box:
        return None
    return {k: box[k] for k in ("x", "y", "width", "height")}


def main():
    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        page = browser.new_page(viewport={"width": 1280, "height": 900})

        # ---- 01 home completa ----
        page.goto(URL, wait_until="networkidle")
        page.wait_for_selector(".promo-banner")
        time.sleep(0.4)
        shot(page, "01-home.png")

        # ---- 03 banner promocional sobrecargado (H-02) ----
        box = clip_of(page, ".promo-banner")
        if box:
            page.screenshot(path=os.path.join(OUT, "03-carga-cognitiva.png"), clip=box)
            print("  saved 03-carga-cognitiva.png")

        # ---- 10 nav con colores inconsistentes (H-04) ----
        box = clip_of(page, ".main-nav")
        if box:
            page.screenshot(path=os.path.join(OUT, "10-navegacion.png"), clip=box)
            print("  saved 10-navegacion.png")

        # ---- 02 sidebar con scroll mostrando muchos filtros (H-01) ----
        page.evaluate("window.scrollTo(0, 250)")
        time.sleep(0.3)
        shot(page, "02-opciones.png")
        page.evaluate("window.scrollTo(0, 0)")
        time.sleep(0.2)

        # ---- 05 detalle de producto (Gestalt/proximidad en layout) ----
        page.locator(".view-detail").first.click()
        page.wait_for_selector(".detail-view")
        time.sleep(0.3)
        shot(page, "05-gestalt.png")

        # volver al home
        page.locator('.main-nav a[data-route="home"]').click()
        page.wait_for_selector(".product-grid")

        # ---- 07 carrito con 2 productos (H-08 badge, H-12 feedback) ----
        cards = page.locator(".add-to-cart")
        cards.nth(0).click()
        time.sleep(0.3)
        cards.nth(1).click()
        time.sleep(0.3)
        page.locator("#cart-btn").click()
        page.wait_for_selector(".cart-overlay.open")
        time.sleep(0.4)
        shot(page, "07-carrito.png")

        # ir a checkout
        page.locator("#checkout-btn").click()
        page.wait_for_selector(".checkout")
        time.sleep(0.3)

        # ---- 08 checkout completo (incluye marketing opt-in H-11) ----
        page.evaluate("window.scrollTo(0, 0)")
        time.sleep(0.2)
        shot(page, "08-checkout.png")

        # ---- 04 formulario con campos y descuento ----
        page.fill("#f-name", "María Pérez")
        page.fill("#f-dni", "45781236")
        page.fill("#f-email", "maria@correo.com")
        page.fill("#f-phone", "+51 999 111 222")
        page.fill("#f-zip", "15001")
        page.fill("#f-discount", "DESC15")
        time.sleep(0.3)
        box = clip_of(page, ".form-grid")
        if box:
            # ampliar recorte para incluir el campo de descuento debajo
            box["height"] = min(box["height"] + 140, 900)
            page.screenshot(path=os.path.join(OUT, "04-formulario.png"), clip=box)
            print("  saved 04-formulario.png")

        # ---- 09 zoom marketing opt-in preseleccionado (H-11) ----
        page.locator(".marketing-optin").scroll_into_view_if_needed()
        time.sleep(0.3)
        box = clip_of(page, ".marketing-optin")
        if box:
            pad = 12
            box = {
                "x": max(box["x"] - pad, 0),
                "y": max(box["y"] - pad, 0),
                "width": box["width"] + pad * 2,
                "height": box["height"] + pad * 2,
            }
            page.screenshot(path=os.path.join(OUT, "09-dark-pattern.png"), clip=box)
            print("  saved 09-dark-pattern.png")

        # ---- 06 mensaje "Error." tras submit con campos vacios (H-07) ----
        page.fill("#f-name", "")
        page.fill("#f-dni", "")
        page.fill("#f-email", "")
        page.locator("#place-order").click()
        page.wait_for_selector("#err-banner.show")
        time.sleep(0.3)
        page.locator("#err-banner").scroll_into_view_if_needed()
        time.sleep(0.3)
        shot(page, "06-error.png")

        browser.close()
        print("Listo. Capturas en", OUT)


if __name__ == "__main__":
    main()

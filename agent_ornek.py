"""Basit bir bakteri ajaninin yasam dongusu ornegi.
Tum yorumlar ve loglar Turkcedir.
"""
from __future__ import annotations

import random
from dataclasses import dataclass
from typing import List


@dataclass
class Gozlem:
    """Ortamdan alinan veriler."""
    besin: float
    yakin_tehdit: bool


@dataclass
class Ajan:
    enerji: float
    hiz: float
    gorus: float

    def karar_ver(self, gozlem: Gozlem) -> str:
        """Gozleme gore hareket kararini doner."""
        if gozlem.yakin_tehdit:
            return "kac"
        if gozlem.besin > 0.5:
            return "ye"
        return "dolas"

    def uygula(self, hareket: str) -> None:
        """Secilen hareketi uygular ve enerji maliyetini gunceller."""
        print(f"[DEBUG] Hareket: {hareket}")
        if hareket == "ye":
            self.enerji += 1.0
        else:
            self.enerji -= 0.1
        print(f"[DEBUG] Enerji: {self.enerji}")


class Ortam:
    def gozlem_uret(self) -> Gozlem:
        """Rastgele gozlem uretir."""
        return Gozlem(besin=random.random(), yakin_tehdit=random.random() < 0.1)


def ajan_dongusu(ajan: Ajan, ortam: Ortam, adim_sayisi: int = 10) -> None:
    """Ajanin tam bir yasam dongusu."""
    for adim in range(adim_sayisi):
        print(f"[DEBUG] Adim {adim}")
        gozlem = ortam.gozlem_uret()
        hareket = ajan.karar_ver(gozlem)
        ajan.uygula(hareket)
        if ajan.enerji <= 0:
            print("[DEBUG] Enerji tükendi, ajan öldü.")
            break


if __name__ == "__main__":
    ajan = Ajan(enerji=2.0, hiz=1.0, gorus=1.0)
    ortam = Ortam()
    ajan_dongusu(ajan, ortam)

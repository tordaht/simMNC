# Gelişmiş Bakteri Evrim Simülasyonu Tasarımı

Bu doküman, NeoMagv8 projesi temel alınarak çok daha modüler ve üretim ortamına
uygun bir bakteri simülasyonu oluşturmak için yüksek seviye mimariyi açıklamaktadır.
Tüm açıklamalar ve log mesajları Türkçedir.

## Mimari Bileşenler

### 1. Ortam (Environment)
- **Sorumluluk:** Petri kabının fiziksel kurallarını, besin ve ışık alanlarını,
hareketli sıvı ortamını yönetir. Sınırlar, çarpışmalar ve akışkan simülasyonu
(Navier-Stokes) bu modülde tanımlanır.
- **Arabirim:** Ortam durumu sorgulanabilir, adım adım güncellenebilir ve ajanlar
için gözlemler üretir.

### 2. Ajanlar (Bakteriler)
- **Sorumluluk:** Her bakteri, enerji seviyesi, genetik özellikler, duyular ve
öğrenme yetileri gibi değerlere sahiptir. Hareket, besin arayışı ve bölünme
kararları burada yönetilir.
- **Öğrenme:** TabPFN tabanlı bir karar mekanizması aracılığıyla basit tablosal
verilerden hızlı öğrenme yapılır. Girdi olarak Türkçe etiketli uyarılar kullanılır.

### 3. Öğrenme & Takviye Döngüsü
- **Veri Toplama:** Simülasyon sırasında tüm deneyimler günlüklenir ve Türkçe
etiketler içeren bir veri kümesine kaydedilir.
- **İşleme:** Veriler ön işlenir ve TabPFN modeline aktarılır.
- **Takviye:** Her başarı veya başarısızlık, bakteri üzerinde ağırlık
ayarlamaları yapar. Böylece ajan zamanla daha verimli kararlar alır.

### 4. Kayıt ve Günlükleme (Logging)
- **Debug Modu:** Her kritik adımda (ortam sıfırlama, ajan kararı, öğrenme
sonucu) ayrıntılı günlük tutulur. Log seviyeleri ayarlanabilir.
- **Format:** Zaman damgaları ve önemli durumlar 5 dakikalık döngülerle
panodan silinir, ancak kritik olaylar kalıcı saklanır.

### 5. Arayüz
- **HTML5/JS:** Mevcut panoyu geliştirerek gerçek zamanlı grafikler,
performans göstergeleri ve sohbet sistemi eklenir.
- **CSS:** Bütün öğeler duyarlı (responsive) ve anlaşılır olacak şekilde
şekillendirilir.

## Uygulama Adımları
1. **Temel iskeletin kurulması:** Ortam ve ajan sınıflarını tanımlayın.
2. **Öğrenme entegrasyonu:** TabPFN modelini kurun ve veri akışını bağlayın.
3. **Arayüz güncellemeleri:** Grafikler, durum paneli ve sohbet bölümü.
4. **Testlerin yazılması:** Birim testleri ve entegrasyon testleri geliştirin.
5. **Sürekli güncelleme:** Yeni özellikler eklendikçe debug modunu kullanarak
tüm adımları doğrulayın.

## Test ve Doğrulama
- **Birim Testleri:** Her modülün (Ortam, Ajan, Öğrenme) ayrı testleri.
  - Sınır koşulları, hatalı veri, enerji tükenmesi gibi durumlar.
- **Entegrasyon Testleri:** Ajanların ortam içinde belirli süre çalışıp
beklenen popülasyon değişimini üretmesi.
- **Başarı Kriterleri:** FPS düşmeden 60'a yakın tutulması, bellek sızıntısı
olmaması ve logların doğru yazılması.

Daha fazla bilgi ve örnek kod için `agent_ornek.py` dosyasına bakınız.

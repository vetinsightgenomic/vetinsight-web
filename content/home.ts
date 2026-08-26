/**
 * Ana sayfada görünen metinlerin tamamı bu dosyada yönetilir.
 * Metinleri güncellerken alan adlarını ve süslü parantez yapısını koruyun.
 */
export const homeContent = {
  hero: {
    eyebrow: "Veteriner genomik teknoloji platformu",
    title: "Genomik veriyi veteriner",
    titleAccent: "karar desteğine dönüştürüyoruz.",
    description:
      "VetInsight Genomic; laboratuvarlardan elde edilen genetik analiz sonuçlarını yapılandırılmış varyant değerlendirmesi, güvenilir bilimsel kaynaklar ve klinik bağlam ile birleştirerek veteriner hekimler için açıklanabilir, izlenebilir ve standardize karar destek bilgilerine dönüştürmek üzere geliştirilen veteriner genomik platformudur.",
    primaryAction: "Teknoloji yaklaşımını inceleyin",
    secondaryAction: "Ürün odağını keşfedin",
    note: "İlk kapsam: Köpeklerde kalıtsal hastalıklarla ilişkili genetik varyantların değerlendirilmesi",
    visual: {
      ariaLabel: "Genetik verinin yapılandırılmış bilgiye dönüşümü",
      label: "Varyant yorumlama sistemi",
      status: "Pilot geliştirme süreci devam ediyor",
      layers: ["Veri", "Kanıt", "Yorum"],
      resultLabel: "Yapılandırılmış çıktı",
      result: "Veteriner genomik içgörü",
    },
  },
  problem: {
    kicker: "İhtiyaç",
    title: "Genetik testin değeri, varyantı tespit etmekle bitmez.",
    lead: "Bir varyantın tespit edilmesi tek başına klinik anlam taşımaz. Hastalık ilişkisi, kalıtım modeli, zigosite, fenotip uyumu, popülasyon sıklığı ve mevcut bilimsel kanıtların birlikte değerlendirilmesi gerekir.",
    description:
      "VetInsight, genomik bulguların klinik bağlamla birlikte ele alındığı bu değerlendirme sürecini standardize ve izlenebilir hale getirmeyi hedeflemektedir.",
  },
  technology: {
    kicker: "Teknoloji iş akışı",
    title: "Veriden rapora, yapılandırılmış bir süreç.",
    description:
      "Her aşama, bilimsel bilginin tutarlı ve açıklanabilir bir çıktıya dönüşmesini destekleyen bir değerlendirme katmanıdır.",
    steps: [
      {
        number: "01",
        title: "Laboratuvar Sonucu",
        description: "Laboratuvardan elde edilen genomik verinin kalite kontrol ile değerlendirme sürecine alınması.",
      },
      {
        number: "02",
        title: "Veri Standardizasyonu",
        description: "Hizalama ve varyant çağırma çıktılarının tutarlı, modüler ve izlenebilir bir yapıya dönüştürülmesi.",
      },
      {
        number: "03",
        title: "Varyant Değerlendirmesi",
        description: "Varyantların anotasyon, filtreleme, hastalık ilişkisi ve klinik bağlam açısından ele alınması.",
      },
      {
        number: "04",
        title: "Bilimsel Kanıt / Literatür",
        description: "Bulguların OMIA, PubMed, NCBI ve diğer güvenilir kaynaklardaki kanıtlarla eşleştirilmesi.",
      },
      {
        number: "05",
        title: "Klinik Yorumlama",
        description: "Kanıtların uzman denetimiyle değerlendirilerek açıklanabilir bir klinik anlatıya dönüştürülmesi.",
      },
      {
        number: "06",
        title: "Yapılandırılmış Veteriner Raporu",
        description: "Sonuçların veteriner hekim kullanımına uygun, standardize karar destek raporu olarak sunulması.",
      },
    ],
  },
  solution: {
    kicker: "Çözüm odağı",
    title: "Tek bir panelin ötesine genişleyebilen genomik bilgi altyapısı.",
    description:
      "İlk ürün odağı, köpeklerde kalıtsal hastalıklarla ilişkili varyantların değerlendirilmesidir. Platform mimarisi; genomik sağlık, karar destek ve genomik kimliklendirme modüllerinin ilerleyen dönemlerde kedi, at ve diğer veteriner türlerine genişletilebilmesine uygun şekilde geliştirilmektedir.",
    status: "Pilot geliştirme süreci devam ediyor",
    panelLabel: "İki ana çözüm ailesi",
    productFamilies: [
      {
        title: "Genomik Sağlık & Karar Destek",
        features: [
          "Kalıtsal hastalık varyantları",
          "Varyant değerlendirmesi",
          "AVCG temelli sınıflandırma",
          "Klinik karar desteği",
          "Yapılandırılmış veteriner raporu",
        ],
        status: "İlk ürün odağı",
        planned: false,
      },
      {
        title: "Genomik Kimliklendirme & Soy Bağı",
        features: [
          "Genomik kimlik profili",
          "Genetik kimlik doğrulama",
          "Ebeveyn tayini",
          "Soy bağı doğrulama",
          "Yetiştiricilik ve kayıt süreçleri",
        ],
        status: "Geliştirme yol haritasında",
        planned: true,
      },
    ],
    footnote: "Genomik Kimliklendirme ve Soy Bağı · Geliştirme yol haritasında",
  },
  audiences: {
    kicker: "Kimler için?",
    title: "Veteriner hekimlik odağında gelişen bir ekosistem.",
    description:
      "Platformun birincil kullanıcısı veteriner hekimlerdir. Diğer paydaşlar, veteriner hekimlik hizmeti ve bilimsel iş birliği süreçlerine uygun deneyimlerle sisteme dahil edilir.",
    primaryTag: "Birincil kullanıcı",
    items: [
      {
        title: "Veteriner Hekimler ve Klinikler",
        description: "Genetik bulguları klinik bağlam ve bilimsel kanıtlarla birlikte değerlendiren karar desteği için.",
        primary: true,
      },
      {
        title: "Yetiştiriciler",
        description: "Kalıtsal hastalık değerlendirmesinin yanı sıra gelecekte planlanan genomik kimliklendirme, ebeveyn doğrulama ve soy bağı değerlendirmesiyle kontrollü yetiştiricilik süreçlerini desteklemek için.",
        primary: false,
      },
      {
        title: "Hayvan Sahipleri",
        description: "Genomik sonuçlara veteriner hekim aracılığıyla, anlaşılır ve klinik bağlamı korunmuş biçimde erişmek için.",
        primary: false,
      },
      {
        title: "Laboratuvarlar / Üniversiteler / Araştırma Kuruluşları",
        description: "Genomik veriyi standardize analiz, bilgi tabanı ve araştırma iş birlikleriyle buluşturmak için.",
        primary: false,
      },
    ],
  },
  science: {
    kicker: "Bilimsel altyapı",
    title: "Kanıta dayalı, uzman denetimli ve izlenebilir değerlendirme.",
    principles: [
      {
        number: "01",
        title: "Uzman kürasyonu ve kanıt değerlendirmesi",
        description: "Bilgileri güvenilir bilimsel kaynaklar ve klinik bağlamla birlikte, uzman denetiminde ele alma.",
      },
      {
        number: "02",
        title: "AVCG temelli sınıflandırma yaklaşımı",
        description: "Animal Variant Classification Guidelines çerçevesini varyant değerlendirme yaklaşımının bilimsel temeli olarak kullanma.",
      },
      {
        number: "03",
        title: "İzlenebilir ve güncellenebilir bilgi",
        description: "Literatür kaynaklarını görünür tutan ve yeni bilimsel kanıtlarla sürekli güncellenen bir bilgi tabanı oluşturma.",
      },
      {
        number: "04",
        title: "İnsan denetimli destek",
        description: "Yapay zekâyı literatür işleme, bilgi yapılandırma ve rapor dilini standardize etmede uzman kürasyonunu desteklemek için kullanma; tanı, tedavi ve nihai klinik karar veteriner hekime aittir.",
      },
    ],
  },
  research: {
    kicker: "Ar-Ge ve ölçeklenebilirlik",
    title: "Ar-Ge odağımız, genomik verinin anlamlı bilgiye dönüşmesi.",
    description:
      "VetInsight’ın teknolojik yeniliği laboratuvar hizmetinden değil; genomik veriyi yapılandırılmış bilgiye ve veteriner hekim odaklı karar desteğine dönüştüren, tekrar kullanılabilir ve ölçeklenebilir altyapı bileşenlerinden doğar.",
    mapAriaLabel: "Platformun genişleme alanları",
    core: ["VetInsight", "Ar-Ge çekirdeği"],
    areas: [
      "Veteriner varyant bilgi tabanı",
      "Modüler analiz iş akışı",
      "Yorumlama ve karar destek kuralları",
      "Veteriner hekim odaklı raporlama",
    ],
  },
  roadmap: {
    kicker: "Kısa yol haritası",
    title: "Kontrollü adımlarla gelişen bir platform.",
    description:
      "Her aşama, bilimsel kaliteyi ve ürün kullanılabilirliğini birlikte geliştirecek biçimde planlanır.",
    items: [
      {
        phase: "Bugün",
        title: "Genomik sağlık bilgi tabanı, analiz ve ilk köpek paneli",
        description: "Kalıtsal hastalıklarla ilişkili varyantlar için yapılandırılmış bilgi tabanı, biyoinformatik analiz altyapısı ve ilk köpek paneli.",
        status: "Pilot geliştirme süreci",
      },
      {
        phase: "Sonraki adım",
        title: "Pilot doğrulama, raporlama ve kullanıcı platformu",
        description: "Analiz ve değerlendirme çıktılarının pilot süreçlerle doğrulanması, standardize veteriner raporlaması ve kullanıcı platformunun geliştirilmesi.",
        status: "Planlanıyor",
      },
      {
        phase: "Gelecek",
        title: "Genomik kimliklendirme ve çok türlü genişleme",
        description: "Ebeveyn tayini, genomik kimlik doğrulama, yeni genomik modüller ve farklı veteriner türlerine uyarlanabilen genişleme altyapısı.",
        status: "Yol haritasında",
      },
    ],
  },
  purpose: {
    kicker: "Yönümüz",
    accessibleTitle: "Misyon ve vizyon",
    mission: {
      label: "Misyon",
      text: "Veteriner genomik verilerini bilimsel kanıt, standardize değerlendirme ve klinik bağlam ile birleştirerek veteriner hekimlerin kullanabileceği açıklanabilir, izlenebilir ve yapılandırılmış karar destek bilgisine dönüştürmek.",
    },
    vision: {
      label: "Vizyon",
      text: "Farklı laboratuvarlara, genomik veri formatlarına, panellere ve hayvan türlerine uyarlanabilen; güncellenebilir, sürdürülebilir ve ölçeklenebilir bir veteriner genomik karar destek altyapısı geliştirmek.",
    },
  },
  contact: {
    kicker: "VetInsight Genomic",
    title: "Veteriner genomik karar desteğini birlikte geliştirelim.",
    description:
      "Pilot doğrulama süreçleri, bilimsel iş birlikleri ve kurumsal çözüm ortaklıkları için geliştirme çalışmalarımız devam ediyor.",
    availability: "Kurumsal iletişim bilgileri yakında eklenecektir.",
  },
  footer: {
    description: "Veteriner Genomik Karar Destek Platformu",
    legalName: "Canan Caner Kulig VetInsight Genomik",
    platformLabel: "Veteriner Genomik Karar Destek Platformu",
    contactNote: "Kurumsal iletişim bilgileri yakında eklenecektir.",
  },
} as const;

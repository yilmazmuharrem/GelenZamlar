using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace V2GELENZAMLARV2
{
    public class Products
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key, Column(Order = 0)]


        public int UrunID { get; set; }

        public string UrunAd { get; set; }

        public string UrunBilgisi { get; set; }

        public string UrunGuncelFiyat { get; set; }

        public string Urun2021Fiyat { get; set; }

        public string Urun2020Fiyat { get; set; }

        public string Urun2019Fiyat { get; set; }

        public string Urun2018Fiyat { get; set; }

        public string Urun2017Fiyat { get; set; }

        public string Urun2016Fiyat { get; set; }

        public string Urun2015Fiyat { get; set; }

    }
}

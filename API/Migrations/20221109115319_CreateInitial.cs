using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace V2GELENZAMLARV2.Migrations
{
    public partial class CreateInitial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Urunlerim",
                columns: table => new
                {
                    UrunID = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UrunAd = table.Column<string>(type: "text", nullable: false),
                    UrunBilgisi = table.Column<string>(type: "text", nullable: false),
                    UrunGuncelFiyat = table.Column<string>(type: "text", nullable: false),
                    Urun2021Fiyat = table.Column<string>(type: "text", nullable: false),
                    Urun2020Fiyat = table.Column<string>(type: "text", nullable: false),
                    Urun2019Fiyat = table.Column<string>(type: "text", nullable: false),
                    Urun2018Fiyat = table.Column<string>(type: "text", nullable: false),
                    Urun2017Fiyat = table.Column<string>(type: "text", nullable: false),
                    Urun2016Fiyat = table.Column<string>(type: "text", nullable: false),
                    Urun2015Fiyat = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Urunlerim", x => x.UrunID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Urunlerim");
        }
    }
}

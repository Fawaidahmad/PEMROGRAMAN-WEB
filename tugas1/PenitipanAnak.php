<?php
namespace PenitipanAnak;

trait LogAktivitas {
    public function log($message) {
        echo "[PENDAFTARAN BERHASIL] " . $message . "<br>";
    }
}

abstract class Penitipan {
    protected $namaAnak;
    protected $usia;
    
    public function __construct($namaAnak, $usia) {
        $this->namaAnak = $namaAnak;
        $this->usia = $usia;
    }
    
    public function getNamaAnak() {
        return $this->namaAnak;
    }
    
    public function getUsia() {
        return $this->usia;
    }
    
    abstract public function biayaPenitipan();
}

class PenitipanAnak extends Penitipan {
    use LogAktivitas;
    private $durasiPenitipan;
    
    public function __construct($namaAnak, $usia, $durasiPenitipan) {
        parent::__construct($namaAnak, $usia);
        $this->durasiPenitipan = $durasiPenitipan;
    }
    
    public function biayaPenitipan() {
        return $this->durasiPenitipan * 50000;
    }
    
    public function __toString() {
        return "Penitipan Anak: " . $this->getNamaAnak() . 
               ", Usia: " . $this->getUsia() . " tahun, Durasi: " . 
               $this->durasiPenitipan . " jam, Biaya: Rp" . $this->biayaPenitipan();
    }
}

if (isset($_POST['submit'])) {
    $nama = $_POST['nama'];
    $usia = $_POST['usia'];
    $durasi = $_POST['durasi'];
    
    $penitipan = new PenitipanAnak($nama, $usia, $durasi);
    $penitipan->log("Data penitipan telah ditambahkan.");
    
    echo "<p>" . $penitipan . "</p>";
}

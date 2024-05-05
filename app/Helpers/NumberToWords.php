<?php

namespace App\Helpers;

class NumberToWords
{
    private static $units = [
        '',
        'Satu',
        'Dua',
        'Tiga',
        'Empat',
        'Lima',
        'Enam',
        'Tujuh',
        'Delapan',
        'Sembilan',
        'Sepuluh',
        'Sebelas'
    ];

    public static function convert($number)
    {
        if ($number < 12) {
            return self::$units[$number];
        } elseif ($number < 20) {
            return self::convert($number - 10) . ' Belas';
        } elseif ($number < 100) {
            return self::convert(intdiv($number, 10)) . ' Puluh' . self::convert($number % 10);
        } elseif ($number < 200) {
            return 'Seratus' . self::convert($number - 100);
        } elseif ($number < 1000) {
            return self::convert(intdiv($number, 100)) . ' Ratus' . self::convert($number % 100);
        } elseif ($number < 2000) {
            return 'Seribu' . self::convert($number - 1000);
        } elseif ($number < 1_000_000) {
            return self::convert(intdiv($number, 1000)) . ' Ribu' . self::convert($number % 1000);
        } elseif ($number < 1_000_000_000) {
            return self::convert(intdiv($number, 1_000_000)) . ' Juta' . self::convert($number % 1_000_000);
        } elseif ($number < 1_000_000_000_000) {
            return self::convert(intdiv($number, 1_000_000_000)) . ' Miliar' . self::convert($number % 1_000_000_000);
        } else {
            return 'Angka terlalu besar';
        }
    }
}

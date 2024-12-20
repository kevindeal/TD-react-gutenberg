<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit990e15ea0940a6e9a7cd5abda47dcdaa
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WPML\\Import\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WPML\\Import\\' => 
        array (
            0 => __DIR__ . '/../..' . '/classes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'WPML_Core_Version_Check' => __DIR__ . '/..' . '/wpml-shared/wpml-lib-dependencies/src/dependencies/class-wpml-core-version-check.php',
        'WPML_Dependencies' => __DIR__ . '/..' . '/wpml-shared/wpml-lib-dependencies/src/dependencies/class-wpml-dependencies.php',
        'WPML_PHP_Version_Check' => __DIR__ . '/..' . '/wpml-shared/wpml-lib-dependencies/src/dependencies/class-wpml-php-version-check.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit990e15ea0940a6e9a7cd5abda47dcdaa::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit990e15ea0940a6e9a7cd5abda47dcdaa::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit990e15ea0940a6e9a7cd5abda47dcdaa::$classMap;

        }, null, ClassLoader::class);
    }
}

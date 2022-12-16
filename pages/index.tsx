import * as htmlToImage from 'html-to-image';
import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { QRCode } from 'react-qrcode-logo';
import Layout from '#/components/Layout';
import InputField from '#/components/Form/InputField';
import { cn } from '#/lib/utils';
import Button from '#/components/Button/Button';
import SelectForm from '#/components/Form/SelectForm';
import { QRStyleOptions, colorOptions } from '#/lib/constants/baseConstants';
import { useRouter } from 'next/router';
import { toast } from '#/components/Toast';

const Home: NextPage = () => {
  const router = useRouter();
  const { qr_value } = router.query;
  const [QRValue, setQRValue] = useState<string>('eindrasap');
  const [QRStyle, setQRStyle] = useState<'squares' | 'dots'>('squares');
  const [imageURL, setImageURL] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>('#FFFFFF');
  const [logoWidth, setLogoWidth] = useState<number>(100);
  const [logoHeight, setLogoHeight] = useState<number>(100);

  const handleQRValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQRValue(e.target.value);
  };

  const handleQRStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQRStyle(e.target.value as 'squares' | 'dots');
  };

  const handleLogoWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogoWidth(Number(e.target.value));
  };

  const handleLogoHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogoHeight(Number(e.target.value));
  };

  const handleImageURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageURL(e.target.value);
  };

  const handleBgColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBgColor(e.target.value);
  };

  const handleDownload = () => {
    const node = document.getElementById('qr-code-wrapper');
    if (!node) return;
    htmlToImage
      .toJpeg(node)
      .then(dataUrl => {
        const link = document.createElement('a');
        link.download = `QR-${QRValue}.jpeg`;
        link.href = dataUrl;
        link.click();
      })
      .catch(error => {
        console.error('oops, something went wrong!', error);
      });
  };

  const setToClipboard = async (blob: Blob) => {
    const data = [new ClipboardItem({ [blob.type]: blob })];
    await navigator.clipboard.write(data);
    toast({
      title: 'Copy QRCode to Clipboard',
      message: 'Success Copy QRCode to your clipboard',
      type: 'success',
    });
  };

  const handleCopy = async () => {
    const node = document.getElementById('qr-code-wrapper');
    if (!node) return;
    const blob = await htmlToImage.toBlob(node);
    if (!blob) return;
    await setToClipboard(blob);
  };

  useEffect(() => {
    qr_value && setQRValue(qr_value as string);
  }, [qr_value]);

  return (
    <Layout>
      <div className={cn('flex flex-wrap items-center justify-between gap-8 lg:flex-nowrap')}>
        <div className="flex w-full flex-col items-center gap-4 lg:items-start">
          <div id="qr-code-wrapper">
            <QRCode
              id="qr-code"
              size={220}
              value={QRValue}
              qrStyle={QRStyle}
              logoImage={imageURL}
              logoHeight={logoHeight}
              logoWidth={logoWidth}
              bgColor={bgColor}
              logoOpacity={0.85}
            />
            <p className="w-60 break-words bg-white text-center text-gray-300">{QRValue}</p>
          </div>
          <Button className="w-60" onClick={handleDownload}>
            Save QR
          </Button>
          <Button className="w-60" onClick={handleCopy}>
            Copy QR
          </Button>
        </div>
        <div className="w-full space-y-4">
          <div className="space-y-1">
            <InputField
              labelName="Content"
              autoFocus
              defaultValue={QRValue}
              type="text"
              onChange={handleQRValueChange}
              placeholder="Input the URL String here"
            />
            <InputField
              labelName="Logo Image URL"
              type="text"
              placeholder="Put the QR Logo Image URL here (optional)"
              onChange={handleImageURLChange}
            />
            <div className="flex items-center gap-4">
              <InputField
                labelName="Logo Image Width (Opt)"
                defaultValue={logoWidth}
                type="number"
                placeholder="Logo Image Width"
                onChange={handleLogoWidthChange}
              />
              <InputField
                labelName="Logo Image Height (Opt)"
                defaultValue={logoHeight}
                type="number"
                placeholder="Logo Image Height"
                onChange={handleLogoHeightChange}
              />
            </div>
            <SelectForm
              labelName="QR Style"
              selectOptions={QRStyleOptions}
              onChange={handleQRStyleChange}
              defaultValue={QRStyle}
              labelHTMLFor="qr-style"
            />
            <SelectForm
              labelName="QR Color Mode"
              labelHTMLFor="qr-color-mode"
              selectOptions={colorOptions}
              onChange={handleBgColorChange}
              defaultValue="#FFFFFF"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

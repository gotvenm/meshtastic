import { Protobuf, Types } from "@meshtastic/js";
import React, { useEffect } from "react";

interface Region {
  freqStart: number;
  freqEnd: number;
  dutyCycle: number;
  spacing: number;
  powerLimit: number;
}

interface Modem {
  bw: number;
  cr: number;
  sf: number;
}

const RegionData = new Map<
  Protobuf.Config.Config_LoRaConfig_RegionCode,
  Region
>([
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.US,
    {
      freqStart: 902.0,
      freqEnd: 928.0,
      dutyCycle: 100,
      spacing: 0,
      powerLimit: 30,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.EU_433,
    {
      freqStart: 433.0,
      freqEnd: 434.0,
      dutyCycle: 10,
      spacing: 0,
      powerLimit: 12,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.EU_868,
    {
      freqStart: 869.4,
      freqEnd: 869.65,
      dutyCycle: 10,
      spacing: 0,
      powerLimit: 27,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.CN,
    {
      freqStart: 470.0,
      freqEnd: 510.0,
      dutyCycle: 100,
      spacing: 0,
      powerLimit: 19,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.JP,
    {
      freqStart: 920.8,
      freqEnd: 927.8,
      dutyCycle: 100,
      spacing: 0,
      powerLimit: 16,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.ANZ,
    {
      freqStart: 915.0,
      freqEnd: 928.0,
      dutyCycle: 100,
      spacing: 0,
      powerLimit: 30,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.RU,
    {
      freqStart: 868.7,
      freqEnd: 869.2,
      dutyCycle: 100,
      spacing: 0,
      powerLimit: 20,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.KR,
    {
      freqStart: 920.0,
      freqEnd: 923.0,
      dutyCycle: 100,
      spacing: 0,
      powerLimit: 0,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.TW,
    {
      freqStart: 920.0,
      freqEnd: 925.0,
      dutyCycle: 100,
      spacing: 0,
      powerLimit: 0,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.IN,
    {
      freqStart: 865.0,
      freqEnd: 867.0,
      dutyCycle: 100,
      spacing: 0,
      powerLimit: 30,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.NZ_865,
    {
      freqStart: 864.0,
      freqEnd: 868.0,
      dutyCycle: 100,
      spacing: 0,
      powerLimit: 36,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.TH,
    {
      freqStart: 920.0,
      freqEnd: 925.0,
      dutyCycle: 100,
      spacing: 0,
      powerLimit: 16,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.UA_433,
    {
      freqStart: 433.0,
      freqEnd: 434.7,
      dutyCycle: 10,
      spacing: 0,
      powerLimit: 10,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.UA_868,
    {
      freqStart: 868.0,
      freqEnd: 868.6,
      dutyCycle: 1,
      spacing: 0,
      powerLimit: 14,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.MY_433,
    {
      freqStart: 433.0,
      freqEnd: 435.0,
      dutyCycle: 100,
      spacing: 0,
      powerLimit: 20,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.MY_919,
    {
      freqStart: 919.0,
      freqEnd: 924.0,
      dutyCycle: 100,
      spacing: 0,
      powerLimit: 27,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.LORA_24,
    {
      freqStart: 2400.0,
      freqEnd: 2483.5,
      dutyCycle: 100,
      spacing: 0,
      powerLimit: 10,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_RegionCode.UNSET,
    {
      freqStart: 902.0,
      freqEnd: 928.0,
      dutyCycle: 100,
      spacing: 0,
      powerLimit: 30,
    },
  ],
]);

const modemPresets = new Map<
  Protobuf.Config.Config_LoRaConfig_ModemPreset,
  Modem
>([
  [
    Protobuf.Config.Config_LoRaConfig_ModemPreset.SHORT_FAST,
    {
      bw: 250,
      cr: 8,
      sf: 7,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_ModemPreset.SHORT_SLOW,
    {
      bw: 250,
      cr: 8,
      sf: 8,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_ModemPreset.MEDIUM_FAST,
    {
      bw: 250,
      cr: 8,
      sf: 9,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_ModemPreset.MEDIUM_SLOW,
    {
      bw: 250,
      cr: 8,
      sf: 10,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_ModemPreset.LONG_FAST,
    {
      bw: 250,
      cr: 8,
      sf: 11,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_ModemPreset.LONG_MODERATE,
    {
      bw: 125,
      cr: 8,
      sf: 11,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_ModemPreset.LONG_SLOW,
    {
      bw: 125,
      cr: 8,
      sf: 12,
    },
  ],
  [
    Protobuf.Config.Config_LoRaConfig_ModemPreset.VERY_LONG_SLOW,
    {
      bw: 62.5,
      cr: 8,
      sf: 12,
    },
  ],
]);

export const FrequencyCalculator = (): JSX.Element => {
  const [modemPreset, setModemPreset] =
    React.useState<Protobuf.Config.Config_LoRaConfig_ModemPreset>(
      Protobuf.Config.Config_LoRaConfig_ModemPreset.LONG_FAST,
    );
  const [region, setRegion] =
    React.useState<Protobuf.Config.Config_LoRaConfig_RegionCode>(
      Protobuf.Config.Config_LoRaConfig_RegionCode.US,
    );
  const [channel, setChannel] = React.useState<Types.ChannelNumber>(
    Types.ChannelNumber.PRIMARY,
  );
  const [numChannels, setNumChannels] = React.useState<number>(0);
  const [channelFrequency, setChannelFrequency] = React.useState<number>(0);

  useEffect(() => {
    const selectedRegion = RegionData.get(region);
    const selectedModemPreset = modemPresets.get(modemPreset);
    const calculatedNumChannels = Math.floor(
      (selectedRegion.freqEnd - selectedRegion.freqStart) /
        (selectedRegion.spacing + selectedModemPreset.bw / 1000),
    );

    setNumChannels(calculatedNumChannels);

    let updatedChannel = channel;
    if (updatedChannel >= calculatedNumChannels) {
      updatedChannel = 0;
    }

    setChannel(updatedChannel);

    setChannelFrequency(
      selectedRegion.freqStart +
        selectedModemPreset.bw / 2000 +
        updatedChannel * (selectedModemPreset.bw / 1000),
    );
  }, [modemPreset, region, channel]);

  return (
    <div className="flex flex-col border-l-[5px] shadow-md my-4 border-accent rounded-lg p-4 bg-secondary gap-2">
      <div className="flex gap-2">
        <label>Modem Preset:</label>
        <select
          value={modemPreset}
          onChange={(e) =>
            setModemPreset(
              Number.parseInt(
                e.target.value,
              ) as Protobuf.Config.Config_LoRaConfig_ModemPreset,
            )
          }
        >
          {Array.from(modemPresets.keys()).map((key) => (
            <option key={key} value={key}>
              {Protobuf.Config.Config_LoRaConfig_ModemPreset[key]}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2">
        <label>Region:</label>
        <select
          value={region}
          onChange={(e) => setRegion(Number.parseInt(e.target.value))}
        >
          {Array.from(RegionData.keys()).map((key) => (
            <option key={key} value={key}>
              {Protobuf.Config.Config_LoRaConfig_RegionCode[key]}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2">
        <label>Channel:</label>
        <select
          value={channel}
          onChange={(e) => setChannel(Number.parseInt(e.target.value))}
        >
          {Array.from(Array(numChannels).keys()).map((key) => (
            <option key={key} value={key}>
              {key + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <label className="font-semibold">Number of channels:</label>
        <input type="number" disabled={true} value={numChannels} />
      </div>
      <div className="flex gap-2">
        <label className="font-semibold">Channel Frequency:</label>
        <input type="number" disabled={true} value={channelFrequency} />
      </div>
    </div>
  );
};

export enum STATUS {
  AVAILABLE = "Available",
  PREPARING = "Preparing",
  CHARGING = "Charging",
  SUSPENDEDEVSE = "SuspendedEVSE",
  SUSPENDEDEV = "SuspendedEV",
  FINISHING = "Finishing",
  RESERVED = "Reserved",
  UNAVAILABLE = "Unavailable",
  FAULTED = "Faulted",
}

export enum AUTH_STATUS {
  ACCEPTED = "Accepted",
  BLOCKED = "Blocked",
  EXPIRED = "Expired",
  INVALID = "Invalid",
  CONCURRENTTX = "ConcurrentTx",
}

export enum CANCEL_RESERVATION_STATUS {
  ACCEPTED = "Accepted",
  REJECTED = "Rejected",
}

export enum BOOT_STATUS {
  ACCEPTED = "Accepted",
  PENDING = "Pending",
  REJECTED = "Rejected",
}

export enum DATATRANSFER_STATUS {
  ACCEPTED = "Accepted",
  REJECTED = "Rejected",
  UNKNOWNMESSAGEID = "UnknownMessageId",
  UNKNOWNVENDORID = "UnknownVendorId",
}

export enum DIAGNOSTIC_STATUS_NOTIFICATION {
  IDLE = "Idle",
  UPLOADED = "Uploaded",
  UPLOADFAILED = "UploadFailed",
  UPLOADING = "Uploading",
}

export enum AVAILABILITY_STATUS {
  ACCEPTED = "Accepted",
  REJECTED = "Rejected",
  SCHEDULED = "Scheduled",
}

export enum GET_COMPOSITE_SCHEDULE_STATUS {
  ACCEPTED = "Accepted",
  REJECTED = "Rejected",
}

export enum CONFIGURATION_STATUS {
  ACCEPTED = "Accepted",
  REJECTED = "Rejected",
  REBOOTREQUIRED = "RebootRequired",
  NOTSUPPORTED = "NotSupported",
}

export enum CLEAR_CACHE_STATUS {
  ACCEPTED = "Accepted",
  REJECTED = "Rejected",
}

export enum CLEAR_CHARGING_PROFILE_STATUS {
  ACCEPTED = "Accepted",
  UNKNOWN = "Unknown",
}

export enum REMOTE_START_STOP_STATUS {
  ACCEPTED = "Accepted",
  REJECTED = "Rejected",
}

export enum RESERVATION_STATUS {
  ACCEPTED = "Accepted",
  FAULTED = "Faulted",
  OCCUPIED = "Occupied",
  REJECTED = "Rejected",
  UNAVAILABLE = "Unavailable",
}

export enum RESET_STATUS {
  ACCEPTED = "Accepted",
  REJECTED = "Rejected",
}

export enum SEND_LOCAL_LIST_STATUS {
  ACCEPTED = "Accepted",
  FAILED = "Failed",
  NOTSUPPORTED = "NotSupported",
  VERSIONMISMATCH = "VersionMismatch",
}

export enum CHARGING_PROFILE_STATUS {
  ACCEPTED = "Accepted",
  REJECTED = "Rejected",
  NOTSUPPORTED = "NotSupported",
}

export enum TRIGGER_MESSAGE_STATUS {
  ACCEPTED = "Accepted",
  REJECTED = "Rejected",
  NOTIMPLEMENTED = "NotImplemented",
}

export enum UNLOCK_STATUS {
  UNLOCKED = "Unlocked",
  UNLOCKFAILED = "UnlockFailed",
  NOTSUPPORTED = "NotSupported",
}

export enum FIRMWARE_STATUS {
  DOWNLOADED = "Downloaded",
  DOWNLOADFAILED = "DownloadFailed",
  DOWNLOADING = "Downloading",
  IDLE = "Idle",
  INSTALLATIONFAILED = "InstallationFailed",
  INSTALLING = "Installing",
  INSTALLED = "Installed",
}

export enum ERROR {
  CONNECTORLOCKFAILURE = "ConnectorLockFailure",
  EVCOMMUNICATIONERROR = "EVCommunicationError",
  GROUNDFAILURE = "GroundFailure",
  HIGHTEMPERATURE = "HighTemperature",
  INTERNALERROR = "InternalError",
  LOCALLISTCONFLICT = "LocalListConflict",
  NOERROR = "NoError",
  OTHERERROR = "OtherError",
  OVERCURRENTFAILURE = "OverCurrentFailure",
  POWERMETERFAILURE = "PowerMeterFailure",
  POWERSWITCHFAILURE = "PowerSwitchFailure",
  READERFAILURE = "ReaderFailure",
  RESETFAILURE = "ResetFailure",
  UNDERVOLTAGE = "UnderVoltage",
  OVERVOLTAGE = "OverVoltage",
  WEAKSIGNAL = "WeakSignal",
}

export enum CONTEXT {
  DEAUTHORIZED = "DeAuthorized",
  INTERRUPTION_BEGIN = "Interruption.Begin",
  INTERRUPTION_END = "Interruption.End",
  SAMPLE_CLOCK = "Sample.Clock",
  SAMPLE_PERIODIC = "Sample.Periodic",
  TRANSACTION_BEGIN = "Transaction.Begin",
  TRANSACTION_END = "Transaction.End",
  TRIGGER = "Trigger",
  OTHER = "Other",
}

export enum FORMAT {
  RAW = "Raw",
  SIGNEDDATA = "SignedData",
}

export enum MEASURAND {
  ENERGY_ACTIVE_EXPORT_REGISTER = "Energy.Active.Export.Register",
  ENERGY_ACTIVE_IMPORT_REGISTER = "Energy.Active.Import.Register",
  ENERGY_REACTIVE_EXPORT_REGISTER = "Energy.Reactive.Export.Register",
  ENERGY_REACTIVE_IMPORT_REGISTER = "Energy.Reactive.Import.Register",
  ENERGY_ACTIVE_EXPORT_INTERVAL = "Energy.Active.Export.Interval",
  ENERGY_ACTIVE_IMPORT_INTERVAL = "Energy.Active.Import.Interval",
  ENERGY_REACTIVE_EXPORT_INTERVAL = "Energy.Reactive.Export.Interval",
  ENERGY_REACTIVE_IMPORT_INTERVAL = "Energy.Reactive.Import.Interval",
  POWER_ACTIVE_EXPORT = "Power.Active.Export",
  POWER_ACTIVE_IMPORT = "Power.Active.Import",
  POWER_OFFERED = "Power.Offered",
  POWER_REACTIVE_EXPORT = "Power.Reactive.Export",
  POWER_REACTIVE_IMPORT = "Power.Reactive.Import",
  POWER_FACTOR = "Power.Factor",
  CURRENT_IMPORT = "Current.Import",
  CURRENT_EXPORT = "Current.Export",
  CURRENT_OFFERED = "Current.Offered",
  VOLTAGE = "Voltage",
  FREQUENCY = "Frequency",
  TEMPERATURE = "Temperature",
  SOC = "SoC",
  RPM = "RPM",
}

export enum PHASE {
  L1 = "L1",
  L2 = "L2",
  L3 = "L3",
  N = "N",
  L1_N = "L1-N",
  L2_N = "L2-N",
  L3_N = "L3-N",
  L1_L2 = "L1-L2",
  L2_L3 = "L2-L3",
  L3_L1 = "L3-L1",
}

export enum LOCATION {
  CABLE = "Cable",
  EV = "EV",
  INLET = "Inlet",
  OUTLET = "Outlet",
  BODY = "Body",
}

export enum UNIT {
  WH = "Wh",
  KWH = "kWh",
  VARH = "varh",
  KVARH = "kvarh",
  eW = "W",
  KW = "kW",
  VA = "VA",
  KVA = "kVA",
  VAR = "var",
  KVAR = "kvar",
  A = "A",
  V = "V",
  K = "K",
  CELCIUS = "Celcius",
  FAHRENHEIT = "Fahrenheit",
  PERCENT = "Percent",
}

export enum REASON {
  ACCEPTED = "Accepted",
  EMERGENCYSTOP = "EmergencyStop",
  EVDISCONNECTED = "EVDisconnected",
  HARDRESET = "HardReset",
  LOCAL = "Local",
  OTHER = "Other",
  POWERLOSS = "PowerLoss",
  REBOOT = "Reboot",
  REMOTE = "Remote",
  SOFTRESET = "SoftReset",
  UNLOCKCOMMAND = "UnlockCommand",
  DEAUTHORIZED = "DeAuthorized",
}

export enum AVAILABILITY_TYPE {
  INOPERATIVE = "Inoperative",
  OPERATIVE = "Operative",
}

export enum ConnectorPhaseRotation {
  NotApplicable = "NotApplicable",
  Unknown = "Unknown",
  RST = "RST",
  RTS = "RTS",
  SRT = "SRT",
  STR = "STR",
  TRS = "TRS",
  TSR = "TSR",
}

export enum CHARGING_PROFILE_PURPOSE {
  CHARGEPOINTMAXPROFILE = "ChargePointMaxProfile",
  TXDEFAULTPROFILE = "TxDefaultProfile",
  TXPROFILE = "TxProfile",
}

export enum CHARGING_PROFILE_KIND {
  ABSOLUTE = "Absolute",
  RECURRING = "Recurring",
  RELATIVE = "Relative",
}

export enum RECURRENCY_KIND {
  DAILY = "Daily",
  WEEKLY = "Weekly",
}

export enum CHARGING_RATE {
  UNIT_A = "A",
  UNIT_W = "W",
}

export enum RESET_TYPE {
  HARD = "Hard",
  SOFT = "Soft",
}

export enum UPDATE_TYPE {
  DIFFERENTIAL = "Differential",
  FULL = "Full",
}

export enum MESSAGE_TRIGGER {
  BOOTNOTIFICATION = "BootNotification",
  DIAGNOSTICSSTATUSNOTIFICATION = "DiagnosticsStatusNotification",
  FIRMWARESTATUSNOTIFICATION = "FirmwareStatusNotification",
  HEARTBEAT = "Heartbeat",
  METERVALUES = "MeterValues",
  STATUSNOTIFICATION = "StatusNotification",
}
